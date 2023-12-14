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
    clean: true,
  },
  hooks: {
    done: ['prettier --write "**/*.{ts,tsx}"'],
  },
  plugins: [
    createSwagger({ output: false, validate: true }),
    createSwaggerTS({
      output: {
        path: './models',
      },
      group: {
        type: 'tag',
      },
      enumType: 'asPascalConst',
      dateType: 'date',
    }),
    createSwaggerTanstackQuery({
      output: {
        path: './hooks',
      },
      group: { type: 'tag' },
      client: { importPath: '../../../client' },
      framework: 'react',
      suspense: true,
    }),
    createSwaggerZod({
      output: {
        path: './zod',
      },
      group: { type: 'tag' },
    }),
  ],
});
