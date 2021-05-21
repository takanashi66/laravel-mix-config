const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

imagemin(['resources/assets/img/**/*.{jpg,png}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.8] }),
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, '../../public/common/img/')
  }
}).then(() => {
  console.log('Images optimized');
});

//webpに変換
imagemin(['resources/assets/img/**/*.{jpg,png}'], {
  plugins: [
    imageminWebp({ quality: 80 })
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, '../../public/common/img/')
  }
}).then(() => {
  console.log('Webp optimized');
});