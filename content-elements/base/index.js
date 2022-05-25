const titleElements = [
  require('./h1'),
  require('./h2'),
  require('./h3')
];

const contentElements = [
  ...titleElements,
  require('./text'),
  require('./figure'),
  require('./button'),
  require('./card'),
  require('./news-snippet'),
  require('./table'),
  require('./video'),
  require('./social-media-follow'),
  require('./social-media-share'),
  require('./chart'),
  require('./html')
];

module.exports.titleElements = titleElements;
module.exports.contentElements = contentElements;