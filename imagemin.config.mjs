import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['resources/assets/img/**/*.{jpg,png}'], {
    destination: 'public/common/img',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.65, 0.8] }),
    ]
  });

  console.log('Images optimized');
})();

(async () => {
  await imagemin(['resources/assets/img/**/*.{jpg,png}'], {
    destination: 'public/common/img',
    plugins: [
      imageminWebp({ quality: 50 })
    ]
  });

  console.log('webp optimized');
})();