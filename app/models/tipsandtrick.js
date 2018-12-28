import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
export default PostModel.extend({
  acf: DS.attr(),
  author: DS.attr(),
  better_featured_image: DS.attr(),
  content: DS.attr(),
  display_name: DS.attr('string'),
  date: DS.attr(),
  excerpt: DS.attr('string'),
  featured_post: DS.attr(),
  link: DS.attr('string'),
  name: DS.attr('string'),
  source_url: DS.attr(),
  title: DS.attr(),
  type: DS.attr('string'),
});
