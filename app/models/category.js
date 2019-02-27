import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  image: attr('string'),
  priority: attr('number'),
  slug: attr('string'),
  title: attr('string')
});
