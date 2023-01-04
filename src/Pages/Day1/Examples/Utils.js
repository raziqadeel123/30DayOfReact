import React from 'react';

const Utils = (imgId, size = 's') => {
  return 'https://i.imgur.com/' + imgId + size + '.jpg';
};

export default Utils;
