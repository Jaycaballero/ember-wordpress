import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  fullItemViewContent: computed('_about_Full_Item_View', function(){
    return{
      content: htmlSafe(this.get('_about_Full_Item_View.firstObject.content')),
      image: htmlSafe(this.get('_about_Full_Item_View.firstObject.better_featured_image.source_url')),
      title: htmlSafe(this.get('_about_Full_Item_View.firstObject.title'))
    }
  }),
  linkUrl: computed('_page_Title', function(){
    let url = this.get('_page_Title.query.slug');
    return url;
  })
});
