import { defineConfig } from '@kubb/core';
import createSwagger from '@kubb/swagger';
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query';
import createSwaggerTS from '@kubb/swagger-ts';
import createSwaggerZod from '@kubb/swagger-zod';

export default defineConfig({
  root: '.',
  input: {
    path: 'https://dro.psypra.com/api/swagger-json',
  },
  output: {
    path: './src/shared/api/generated',
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
      groupBy: { type: 'tag' },
      client: './src/shared/api/client.ts',
      framework: 'react',
    }),
    createSwaggerZod({
      output: './zod',
      groupBy: { type: 'tag' },
    }),
  ],
});
