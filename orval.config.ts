import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json',
    output: {
      baseUrl: 'http://localhost:3333',
      clean: true,
      client: 'fetch',
      httpClient: 'fetch',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
      target: './src/http/api.ts',
    },
  },
})
