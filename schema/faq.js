const { ContentType, FieldType } = require('@include/hearth');

const faq = new ContentType({
  name: 'faq',
  singularDisplayName: 'FAQ',
  pluralDisplayName: 'FAQs',
});

faq
  .createField({
    name: 'question',
    displayName: 'Question',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'answer',
    displayName: 'Answer',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = faq;