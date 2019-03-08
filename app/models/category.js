import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  image: attr('string'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string'),
  subCategories: hasMany('sub-category')
});
