const { ContentType, FieldType } = require('@include/hearth');

const community = new ContentType({
  name: 'community',
  singularDisplayName: 'Community Post',
  pluralDisplayName: 'Community Posts',
});

community
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'date',
    displayName: 'Date',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = community;
