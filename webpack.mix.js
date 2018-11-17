const mix = require('laravel-mix');

mix.js('resources/assets/js/script.js', 'public/common/js')
   .sourceMaps()
   
mix.sass('resources/assets/scss/style.scss', 'public/common/css')
   .options({
      processCssUrls: false,
      postCss: [
        require('css-mqpacker')()
      ],
      autoprefixer: {
        browsers: ['last 2 versions'],
        options: {
          grid: true,
        }
      }
   })
   .sourceMaps()

mix.browserSync({
  server: 'public',
  proxy: false,
  files: [
    'public/**/*.html',
    'public/**/*.php',
    'public/common/js/*.js',
    'public/common/css/*.css',
  ]
})
