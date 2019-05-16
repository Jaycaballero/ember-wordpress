import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  socialLinks: map('_social_Links', function(socialLink){
    return{
      socialIcon: htmlSafe(get(socialLink, 'better_featured_image.source_url')),
      url: get(socialLink, 'acf.social_link_url')
    }
  })
});
