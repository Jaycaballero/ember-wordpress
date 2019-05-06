import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  attribute: belongsTo(),
  days: attr('number'),
  description: attr('string'),
  fullDescription: attr('string'),
  levels: attr('string'),
  levelNumeric: attr('number'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string'),
  topics: attr(),
  version: attr('string'),

  category: hasMany('category'),
  subCategory: hasMany('sub-category'),
});
