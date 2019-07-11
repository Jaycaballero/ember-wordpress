import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';


export default Component.extend({
  testimonialsTextContent: map('_client_Testimonials', function(testimonials){
    return {
      company: get(testimonials, 'acf.company'),
      content: htmlSafe(get(testimonials, 'acf.editor')),
      image: get(testimonials, 'better_featured_image.source_url'),
      name: get(testimonials, 'acf.name')
    }
  })
});
