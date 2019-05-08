import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  bannerImageUrl: attr('string'),
  courses: hasMany('course'),
  iconUrl: attr('string'),
  levels: attr('string'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string'),
  version: attr('string'),

  subCategories: hasMany('sub-category')
});
