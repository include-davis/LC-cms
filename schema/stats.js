const { ContentType, FieldType } = require('@include/hearth');

const stats = new ContentType({
  name: 'club_stats',
  singularDisplayName: 'Club Stat',
  pluralDisplayName: 'Club Stats',
});

stats
  .createField({
    name: 'label',
    displayName: 'Label',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'value',
    displayName: 'Value',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = stats;
