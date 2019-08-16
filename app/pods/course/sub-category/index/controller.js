import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { alias, filter, oneWay } from '@ember/object/computed'
import moment from 'moment';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Controller.extend({
  publicCoursePage: 1,
  publicCoursePerPage: 5,

  pagedPublicDates: pagedArray('sortedPublicDates', {
    page: alias('parent.publicCoursePage'),
    perPage: alias('parent.publicCoursePerPage')
  }),

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

  sortedPublicDates: computed('publicDates.@each.startDate', 'selectedLocation', function() {
    let dates = get(this, 'publicDates');
    let selectedLocation = get(this, 'selectedLocation');
    if (dates) {
      dates.sort(function(location1, location2) {
        const date1 = moment(location1.startDate, 'YYYY-MM-DD');
        const date2 = moment(location2.startDate, 'YYYY-MM-DD');
        if (date1.isAfter(date2)) {
          return 1;
        } else if (date1.isBefore(date2)) {
          return -1;
        }

        return 0;
      });
    }
    if (selectedLocation) {
      dates = dates.filter(function(date) {
        return date.location.get('name') == selectedLocation.name;
      });
    }
    return dates;
  }),

  totalPages: oneWay('pagedPublicDates.totalPages'),

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
    },
    selectLocation(location) {
      set(this, 'selectedLocation', location);
      set(this, 'publicCoursePage', 1);
    },
  }
});
