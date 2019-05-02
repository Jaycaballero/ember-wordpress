import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  bannerImage: attr('string'),
  duration: attr('string'),
  content: attr('string'),
  description: attr('string'),
  icon: attr('string'),
  image: attr('string'),
  introtext: attr('string'),
  level: attr('string'),
  outline: attr('string'),
  priority: attr('number'),
  headerTitle: attr('string'),
  slug: attr('string'),
  title: attr('string'),
  versions: attr('string'),

  categories: hasMany('category'),
  courses: hasMany('course'),
});
