const { ContentType, FieldType } = require('@include/hearth');

const pastEvents = new ContentType({
  name: 'past_events',
  singularDisplayName: 'Event',
  pluralDisplayName: 'Events',
});

pastEvents
  
  .createField({
    name: 'date',
    displayName: 'Date',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_name',
    displayName: 'Event Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = pastEvents;
