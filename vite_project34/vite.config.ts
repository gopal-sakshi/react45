import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
console.log(resolve(__dirname, 'lib23'));
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        port: 33446,
        open: false,
    },
    resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
    },
})
