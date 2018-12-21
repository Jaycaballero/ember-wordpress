import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
export default PostModel.extend({
  acf: DS.attr(),
  better_featured_image: DS.attr(),
  editor: DS.attr('string'),
  name: DS.attr('string'),
});
