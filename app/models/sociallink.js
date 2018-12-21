import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
export default PostModel.extend({
  acf: DS.attr(),
  better_featured_image: DS.attr(),
  content: DS.attr(),
  link: DS.attr('string'),
  name: DS.attr('string'),
  source_url: DS.attr(),
  title: DS.attr(),
  type: DS.attr('string')
});
