const { ContentType, FieldType } = require('@include/hearth');
/* 
used for all cards that have the same strucuture of photo, name of event, and date
ex: past presentations and past events on archive page

*/
const events = new ContentType({
  name: 'events',
  singularDisplayName: 'Event',
  pluralDisplayName: 'Events',
});

events
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
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = events;
