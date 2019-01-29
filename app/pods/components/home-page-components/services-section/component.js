import Component from '@ember/component';
import { get } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { map } from '@ember/object/computed';

export default Component.extend({
  servicesItem: map('_services', function(servicesItem){
    return {
      title: htmlSafe(get(servicesItem, 'title')),
      content: htmlSafe(get(servicesItem, 'content')),
      image: get(servicesItem, 'better_featured_image.source_url')
    }
  }),
});
