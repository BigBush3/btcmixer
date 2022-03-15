const withImages = require('next-images');
const nextTranslate = require('next-translate');

// module.exports = {
//   ...withImages(),
// ...nextTranslate(),
// }
module.exports = withImages(
  nextTranslate({})
);
