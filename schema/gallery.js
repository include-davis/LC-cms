const { ContentType, FieldType } = require('@include/hearth');

const gallery = new ContentType({
  name: 'gallery_items',
  singularDisplayName: 'Gallery Item',
  pluralDisplayName: 'Gallery Items',
});

gallery
  .createField({
    name: 'type',
    displayName: 'Type',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'quote',
    displayName: 'Quote',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'images',
    displayName: 'Images',
    type: FieldType.MEDIA_LIST,
    required: false,
  })
  .createField({
    name: 'video',
    displayName: 'Video URL',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'order',
    displayName: 'Display Order',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = gallery;
