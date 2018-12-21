import DS from 'ember-data';

export default DS.Model.extend({
  acf: DS.attr(),
  better_featured_image: DS.attr(),
  content: DS.attr(),
  call_to_action_link: DS.attr(),
  excerpt: DS.attr(),
  editor: DS.attr('string'),
  header_sub_text: DS.attr(),
  link: DS.attr('string'),
  name: DS.attr('string'),
  object_id: DS.attr('number'),
  source_url: DS.attr(),
  template: DS.attr(),
  title: DS.attr(),
});
