import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
export default PostModel.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
});
