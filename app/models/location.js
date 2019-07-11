import DS from 'ember-data';

export default DS.Model.extend({
  acf: DS.attr(),
  better_featured_image: DS.attr(),
  details: DS.attr(),
  price: DS.attr(),
  title: DS.attr(),
});
