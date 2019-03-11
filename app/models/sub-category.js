import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  bannerImage: attr('string'),
  categories: hasMany('category'),
  content: attr('string'),
  icon: attr('string'),
  image: attr('string'),
  introtext: attr('string'),
  outline: attr('string'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string'),
});
