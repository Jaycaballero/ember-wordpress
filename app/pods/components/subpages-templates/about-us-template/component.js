import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';


export default Component.extend({

  classNames: ['sub-page subpage-inner-content'],

  textContent: computed('_about_Us_Template', function(){
    let texts = get(this, '_about_Us_Template');
    let text = texts.firstObject.acf.editor;
    return htmlSafe(text);
  }),

  newLink: map('_about_Us_Template', function(callToAction){
    return {
      linkTitle: get(callToAction, 'acf.call_to_action_link.title'),
      link: get(callToAction, 'acf.call_to_action_link.url')
    }
  }),


  groupedTestimonials: computed('testimonialsTextContent', function() {
    let testimonials = [];
    let group = [];
    get(this, 'testimonialsTextContent').forEach((testimonial, index) => {
      if (index % 2 === 0 && group.length > 0) {
        testimonials.push(group);
        group = [];
      }
      group.push(testimonial);
    });
    testimonials.push(group);
    return testimonials;
  }),


  testimonialsTextContent: map('_client_Testimonial', function(testimonials){
    return {
      company: get(testimonials, 'acf.company'),
      content: htmlSafe(get(testimonials, 'acf.editor')),
      image: get(testimonials, 'better_featured_image.source_url'),
      name: get(testimonials, 'acf.name')
    }
  })

});
