import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  levels: attr('string'),
  levelNumeric: attr('number'),
  version: attr('string'),
  priority: attr('number'),
  days: attr('number'),
  description: attr('string'),
  slug: attr('string'),
  title: attr('string'),

  attribute: belongsTo(),
  category: belongsTo(),
  subCategory: belongsTo()
});