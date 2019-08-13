import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { filter, map } from '@ember/object/computed'
import moment from 'moment';

export default Controller.extend({
  publicDates: computed('subCategory.courses.@each.publicDates', function() {
    let dates = [];
    if (get(this, 'subCategory.courses')) {
      get(this, 'subCategory.courses').forEach(function(course) {
        if (course.publicDates.length) {
          course.publicDates.forEach(function (publicDate) {
            dates.push(publicDate);
          });
        }
      });
    }
    return dates;
  }),
  ungroupedCourses: filter('subCategory.courses', function (course) {
    return !course.courseGroups.length;
  }),
  actions: {
    cancelLead() {
      this.crmLead.rollbackAttributes();
      this.set('bookingFormVisible', false);
    },
    createLead(lead) {
      return lead.save();
    },
    selectBooking(booking) {
      let bookingDate = moment(booking.startDate).format('DD MMMM YYYY');
      const crmLead = this.store.createRecord('crm-lead', {
        bookingDateVenue: bookingDate,
        bookingPrice: `£${booking.price}`,
        bookingLocation: booking.location.get('name'),
        source: booking.course.get('title'),
        sourceDescription: 'Public Booking'
      });
      this.setProperties({ crmLead, bookingFormVisible: true });
    }
  }
});
