import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import treatJsAsJSX from './vite_plugin23';

export default defineConfig({
    plugins: [treatJsAsJSX, react()],
    server: {
        port: 33445,
        open: false,
    },
    build: {
        outDir: 'vite_build23',
    }
})
