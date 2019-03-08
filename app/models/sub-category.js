import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  icon: attr('string'),
  image: attr('string'),
  introtext: attr('string'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string'),
  categories: hasMany('category'),
});
