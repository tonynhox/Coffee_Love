const getImageUrlByKey = async () => {
    imageKey = 'MY_IMAGE_KEY';
    try {
      const url = await Storage.get(imageKey, {
        level: 'public',
        bucket: BUCKET_NAME,
      });
      console.log('URL for', imageKey, ':', url)

      // return url;
    } catch (error) {
      console.log('ERROR GETTING IMAGE URL: ', error);
      return null;
    }
  };

  // lay url cua anh tu key