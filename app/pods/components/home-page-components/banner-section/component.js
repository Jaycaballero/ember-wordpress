import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  newLink: computed('_banners', function(){
    let banners = get(this, '_banners');
    let url = banners.firstObject.acf.call_to_action_link.url;
    return url;
  }),
  actions: {
    content(banner) {
      return htmlSafe(get(banner, 'content'));
    }
  }
});
