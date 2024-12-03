import { defineConfig, transformWithEsbuild } from 'vite';

export default {
    name: 'treat-js-files-as-jsx2323',
    async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;           // include ts or tsx for TypeScript support 

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
        });
    }
}