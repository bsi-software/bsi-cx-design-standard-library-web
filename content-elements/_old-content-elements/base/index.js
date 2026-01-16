const titleElements = [
  require('./headlines/h1'),
  require('./headlines/h2'),
  require('./headlines/h3'),
  require('./headlines/h4'),
  require('./headlines/h5'),
  require('./headlines/h6')
];

const contentElements = [
  ...titleElements,
  require('./accordion'),
  require('./banner'),
  require('./button'),
  require('./card'),
  require('./chart'),
  require('./figure'),
  require('./html'),
  require('./news-snippet'),
  require('./slot-finder'),
  require('./social-media-follow'),
  require('./social-media-share'),  
  require('./table'),
  require('./text'),
  require('./video')
];

module.exports.titleElements = titleElements;
module.exports.contentElements = contentElements;