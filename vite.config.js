import {resolve} from 'path';
import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';

const root = resolve(__dirname, 'src');
const output = resolve(__dirname, 'dist');

const configuartion = {
    root, 
    base: '/goals-tracker',
    plugins: [ViteMinifyPlugin({})],
    build: {
        output,
        emptyOutDir: true,
        minify: 'terser',
        terserOptions: {
            output: {
                comments: false
            }
        },
        rollUpOptions: {
            input: {
                main: resolve(root, 'index.html')
            }
        }
    }
};

export default defineConfig(configuartion);