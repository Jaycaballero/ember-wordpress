import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  ourBenefits: map('_our_Benefits_Section', function(benefit){
    return {
      content: htmlSafe(get(benefit, 'content')),
      image: get(benefit, 'better_featured_image.source_url'),
      title: htmlSafe(get(benefit, 'title')),
    }
  })
});
