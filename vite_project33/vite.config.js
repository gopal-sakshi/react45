import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 33445,
        open: false,
    },
    build: {
        outDir: 'vite_build23',
    }
})
