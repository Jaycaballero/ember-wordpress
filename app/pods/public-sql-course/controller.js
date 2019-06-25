import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import PublicSql from 'systematix/constants/public-sql';

export default Controller.extend({

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

  sqlCourse: computed('pages.[]', function() {
    const sqlCourse = this.get('pages.firstObject');
    return {
      defaultEditor: htmlSafe(sqlCourse.get('content')),
      sliderBranding: htmlSafe(sqlCourse.get('acf.slider_branding')),
      sqlCourse: htmlSafe(sqlCourse.get('acf.sql_course')),
      sqlCrashCourse: htmlSafe(sqlCourse.get('acf.sql_crash_course')),
      learnMore: htmlSafe(sqlCourse.get('acf.learn_more')),
      signUp: htmlSafe(sqlCourse.get('acf.sign_up_for_our_sql')),
      map: htmlSafe(sqlCourse.get('acf.map')),
      courseOutline: htmlSafe(sqlCourse.get('acf.course_outline')),
      pdfOutline: htmlSafe(sqlCourse.get('acf.pdf_outline')),
      courseContent: htmlSafe(sqlCourse.get('acf.course_content')),
      sqlTrainingCourse: htmlSafe(sqlCourse.get('acf.two_day_sql_training_course'))
    };
  }),

  actions: {
    cancelBooking() {
      this.crmLead.rollbackAttributes();
      this.set('bookingFormVisible', false);
    },
    selectBooking(booking, location) {
      const crmLead = this.store.createRecord('crm-lead', {
        bookingDateVenue: booking.date,
        bookingPrice: booking.price,
        bookingLocation: location.title,
        source: 'SQL',
        sourceDescription: 'Public Booking'
      });
      this.setProperties({ crmLead, bookingFormVisible: true });
    },
    submit() {
      this.crmLead.save();
    }
  }
});
