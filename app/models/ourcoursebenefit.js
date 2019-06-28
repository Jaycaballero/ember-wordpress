import DS from 'ember-data';

export default DS.Model.extend({
  better_featured_image: DS.attr(),
  title: DS.attr(),
});
