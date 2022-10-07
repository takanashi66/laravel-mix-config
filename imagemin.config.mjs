import imagemin from 'imagemin-keep-folder';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['resources/img/**/*.{jpg,png}'], {
    destination: 'public/common/img',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.65, 0.8] }),
    ],
    replaceOutputDir: output => {
        return output.replace(/img\//, '../public/common/img/')
    }
  });

  console.log('Images optimized');
})();

(async () => {
  await imagemin(['resources/img/**/*.{jpg,png}'], {
    destination: 'public/common/img',
    plugins: [
      imageminWebp({ quality: 50 })
    ],
    replaceOutputDir: output => {
        return output.replace(/img\//, '../public/common/img/')
    }
  });

  console.log('webp optimized');
})();