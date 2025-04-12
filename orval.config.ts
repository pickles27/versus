import { defineConfig } from 'orval';

export default defineConfig({
  versus: {
    output: {
      mode: 'split',
      target: './src/api/',
      schemas: './src/models',
      client: 'swr',
      httpClient: 'fetch',
      mock: true,
    },
    input: {
      target: './openapi.yml',
    },
  },
});