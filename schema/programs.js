const { ContentType, FieldType } = require('@include/hearth');
/* 
used for all cards that have the same strucuture of photo, name of program, and description

*/
const programs = new ContentType({
  name: 'programs',
  singularDisplayName: 'Program',
  pluralDisplayName: 'Programs',
});

programs
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = programs;
