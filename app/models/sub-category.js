import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  bannerImageUrl: attr('string'),
  duration: attr('string'),
  content: attr('string'),
  description: attr('string'),
  icon: attr('string'),
  iconUrl: attr('string'),
  introtext: attr('string'),
  levels: attr('string'),
  outline: attr('string'),
  priority: attr('number'),
  headerTitle: attr('string'),
  slug: attr('string'),
  title: attr('string'),
  version: attr('string'),

  categories: hasMany('category'),
  courses: hasMany('course'),
});
