import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import PublicSql from 'systematix/constants/public-sql';

export default Component.extend({
  sqlCourse: computed('categories', function() {
    if (get(this, 'categories')) {
      let category = get(this, 'categories').findBy('slug', PublicSql.CATEGORY);
      let subCategory = category.subCategories.findBy('slug', PublicSql.SUB_CATEGORY);
      return subCategory.courses.findBy('slug', PublicSql.COURSE);
    }
  }),

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
  }),

  actions: {
    setDate(date) {
      set(this, 'dateVenue', date);
    },
    submit() {
      get(this, 'crmLead').set('bookingDateVenue', get(this, 'dateVenue'));
      get(this, 'crmLead').set('bookingPrice', '595.00');
      get(this, 'crmLead').set('source', 'SQL');
      get(this, 'crmLead').set('sourceDescription', 'Public Booking');

      get(this, 'createLead')(get(this,'crmLead'));
    },
    hideForm() {
      set(this, 'bookingFormVisible', false);
    }
  }
});
