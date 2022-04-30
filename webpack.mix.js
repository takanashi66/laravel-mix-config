const mix = require('laravel-mix');

mix.js('resources/js/script.js', 'public/common/js')
    .sass('resources/scss/style.scss', 'public/common/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer')({
                grid: true
            }),
            require('postcss-sort-media-queries')()
        ]
    })
    .sourceMaps()

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}

mix.browserSync({
    server: 'public',
    proxy: false,
    port: 3000,
    files: [
        'public/**/*.html',
        'public/**/*.php',
        'public/common/js/*.js',
        'public/common/css/*.css',
    ],
    ui: {
        port: 3001
    }
})