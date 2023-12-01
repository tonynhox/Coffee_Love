import ImageResizer from 'react-native-image-resizer';
const {getImageSize} = require('./getImageSize');

export const resizeImage = async path => {
  try {
    console.log('ROOT PATH: ', path);
    const originalImagePath = path; // replace with the actual path or URI of your image
    const originalImageSize = await getImageSize(originalImagePath);

    let compressionQuality;
    // if (originalImageSize < 1 * 1024 * 1024) {
    //   compressionQuality = 100;
    // } else if (originalImageSize < 3 * 1024 * 1024) {
    //   // If the original image size is less than 3MB, reduce by 50%
    //   compressionQuality = 60;
    // } else {
    //   // If the original image size is greater than or equal to 3MB, reduce by 80%
    //   compressionQuality = 50;
    // }

    const response = await ImageResizer.createResizedImage(
      originalImagePath,
      300,
      300,
      'JPEG',
      100,
      0,
    );
    console.log('QUALITY: ', compressionQuality);
    console.log('PATH RESIZE: ', response.uri);
    console.log('ROOT SIZE: ', originalImageSize / 1024);
    console.log('RESIZE IMAGE: ', response.size / 1024);

    return response.uri;
  } catch (error) {
    console.error('Error resizing image:', error);
  }
};
