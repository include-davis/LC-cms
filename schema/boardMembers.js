const { ContentType, FieldType } = require('@include/hearth');

const boardMembers = new ContentType({
  name: 'board_members',
  singularDisplayName: 'Board Member',
  pluralDisplayName: 'Board Members',
});

boardMembers
  .createField({
    name: 'first_name',
    displayName: 'First Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'last_name',
    displayName: 'Last Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'pronouns',
    displayName: 'Pronouns',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'position',
    displayName: 'Position',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'year',
    displayName: 'Year',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'major',
    displayName: 'Major',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'interests',
    displayName: 'Interests',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'outside_activities',
    displayName: 'Outside of Linguistics',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'fun_fact',
    displayName: 'Fun Fact',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'instragram',
    displayName: 'Instragram',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'linkedin',
    displayName: 'LinkedIn',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  });

module.exports = boardMembers;
