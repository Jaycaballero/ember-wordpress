import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string'

export default Component.extend({
  fullItemViewContent: map('_full_Item_View', function(fullItemViewContent){
    return{
      title: get(fullItemViewContent, 'title'),
      content: htmlSafe(get(fullItemViewContent, 'content')),
      image: get(fullItemViewContent, 'better_featured_image.source_url')
    }
  })
});
