import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  newLink: map('_courses_Template', function(callToAction){
    return {
      linkTitle: get(callToAction, 'acf.call_to_action_link.title'),
      link: get(callToAction, 'acf.call_to_action_link.url')
    }
  }),

  publicSqlCourseContent: map('publicSqlCourse', function(contentItems){
    return {
      defaultEditor: htmlSafe(get(contentItems, 'content')),
      sliderBranding: htmlSafe(get(contentItems, 'acf.slider_branding')),
      courseBenefits: htmlSafe(get(contentItems, 'acf.course_benefits')),
      trainingCenter: htmlSafe(get(contentItems, 'acf.training_center')),
      map: htmlSafe(get(contentItems, 'acf.map')),
      gallery: htmlSafe(get(contentItems, 'acf.gallery')),
      courseOutline: htmlSafe(get(contentItems, 'acf.course_outline'))
    }
  })

});
