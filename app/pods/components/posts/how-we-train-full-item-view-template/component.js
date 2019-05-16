import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  fullItemViewContent: map('_full_Item_View', function(fullItemViewContent){
    return{
      paragraphLead: htmlSafe(get(fullItemViewContent, 'acf.paragraph_lead')),
      title: htmlSafe(get(fullItemViewContent, 'title')),
      content: htmlSafe(get(fullItemViewContent, 'acf.editor')),
      image: get(fullItemViewContent, 'better_featured_image.source_url')
    }
  }),
  linkUrl: computed('_page_Title', function(){
    let url = this.get('_page_Title.query.slug');
    return url;
  })
});
