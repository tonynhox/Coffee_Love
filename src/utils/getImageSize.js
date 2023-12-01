import RNFS from 'react-native-fs';

export const getImageSize = async (path) => {
    try {
      const stats = await RNFS.stat(path);
      return stats.size;
    } catch (error) {
      console.error('Error getting image size:', error);
      return 0;
    }
  };