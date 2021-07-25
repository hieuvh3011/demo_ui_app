const _getIdFromYoutube = (youtubeUrl = '') => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = youtubeUrl.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const getEmbedVideo = url => {
  let result = '';
  if (url.startsWith('https://www.youtube.com/')) {
    const id = _getIdFromYoutube(url);
    if (id !== null) {
      result = `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1`;
    }
  }
  console.log('video url = ', result);
  return result;
};
