const mix = require('laravel-mix');

mix.js('resources/js/script.js', 'public/common/js')
    .css('resources/scss/style.css', 'public/common/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer')({
                grid: true
            })
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
