const titleElements = [
  require('./h1'),
  require('./h2'),
  require('./h3'),
  require('./h4'),
  require('./h5'),
  require('./h6')
];

const contentElements = [
  ...titleElements,
  require('./accordion'),
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