import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
export default PostModel.extend({
  acf: DS.attr(),
  better_featured_image: DS.attr(),
  call_to_action_link: DS.attr(),
  content: DS.attr(),
  source_url: DS.attr(),
  title: DS.attr()
});
