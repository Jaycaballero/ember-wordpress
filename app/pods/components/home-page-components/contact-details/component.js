import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  contactDetails: map('_contact_Details', function (detail) {
    return {
      content: htmlSafe(get(detail, 'content')),
      image: get(detail, 'better_featured_image.source_url')
    };
  })

});
