import { defineConfig } from '@kubb/core';
import createSwagger from '@kubb/swagger';
import createSwaggerFaker from '@kubb/swagger-faker';
import createSwaggerMsw from '@kubb/swagger-msw';
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query';
import createSwaggerTS from '@kubb/swagger-ts';
import createSwaggerZod from '@kubb/swagger-zod';

export default defineConfig({
  root: '.',
  input: {
    path: 'https://dro.psypra.com/api/swagger-json',
  },
  output: {
    path: './src/6-shared/api/generated',
    clean: true,
  },
  hooks: {
    done: ['prettier --write "**/*.{ts,tsx}"'],
  },
  plugins: [
    createSwagger({ output: false, validate: true }),
    createSwaggerTS({
      output: 'models',
      groupBy: {
        type: 'tag',
      },
      enumType: 'asPascalConst',
      dateType: 'date',
    }),
    createSwaggerTanstackQuery({
      output: './hooks',
      skipBy: [
        {
          type: 'tag',
          pattern: 'store',
        },
      ],
      groupBy: { type: 'tag' },
      client: './src/6-shared/api/client.ts',
      infinite: {},
      framework: 'react',
    }),
    createSwaggerZod({
      output: './zod',
      skipBy: [
        {
          type: 'tag',
          pattern: 'store',
        },
      ],
      groupBy: { type: 'tag' },
    }),
    createSwaggerFaker({
      output: 'mocks',
      skipBy: [
        {
          type: 'tag',
          pattern: 'store',
        },
      ],
      groupBy: { type: 'tag' },
      dateType: 'date',
    }),
    createSwaggerMsw({
      output: 'msw',
      skipBy: [
        {
          type: 'tag',
          pattern: 'store',
        },
      ],
      groupBy: { type: 'tag' },
    }),
  ],
});
