import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  fullItemViewContent: map('_full_Item_View', function(fullItemViewContent){
    return {
      title: htmlSafe(get(fullItemViewContent, 'title')),
      content: htmlSafe(get(fullItemViewContent, 'content')),
      image: get(fullItemViewContent, 'better_featured_image.source_url')
    }
  }),
  pageTitle: computed('_page_Title',  function(){
    let titlePage = htmlSafe(this.get('_page_Title.firstObject.title'));
    return titlePage;
  }),
  linkUrl: computed('_page_Title', function(){
    let url = this.get('_page_Title.query.slug');
    return url;
  })
});
