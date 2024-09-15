import liveServer from '@compodoc/live-server';
import esbuild from 'esbuild';
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { copy } from 'esbuild-plugin-copy';

liveServer.start({
    port: 7000,
    host: 'localhost',
    root: 'dist',
    open: true,
    ignore: 'node_modules',
    wait: 0,
})

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,    
    outdir: './dist',
    splitting: true,
    format: 'esm',
    watch: true,
    logLevel: 'info',
    minify: true,
    sourcemap: true,
    loader: {
        ".html": "text"
    },
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(source);
                return css;
            },
        }),
        copy({
            assets: [
                {
                    from: ['./assets/**/*'],
                    to: ['assets'],
                },
                {
                    from: ['./src/index.html'],
                    to: [''],
                },
            ],
            watch: true
          }),
    ]
}).catch(() => process.exit(1));