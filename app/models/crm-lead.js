import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  accountName: attr('string'),
  email: attr('string'),
  message: attr('string'),
  name: attr('string'),
  phone: attr('string'),
  source: attr('string'),
  sourceDescription: attr('string'),

  bookingDelegateAmount: attr(),
  bookingDelegateNames: attr(),
  bookingDateVenue: attr(),
  bookingPrice: attr()
});
