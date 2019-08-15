import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  attribute: belongsTo(),
  bannerImageUrl: attr('string'),
  color: attr('string'),
  days: attr('number'),
  description: attr('string'),
  fullDescription: attr('string'),
  iconUrl: attr('string'),
  levels: attr('string'),
  levelNumeric: attr('number'),
  pdfUrl: attr('string'),
  priority: attr('number'),
  shortDescription: attr('string'),
  slug: attr('string'),
  title: attr('string'),
  topics: attr(),
  version: attr('string'),

  categories: hasMany(),
  publicDates: hasMany(),
  courseGroups: hasMany('site-tag'),
  subCategories: hasMany(),
});
