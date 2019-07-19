import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  address1: attr('string'),
  address2: attr('string'),
  address3: attr('string'),
  county: attr('string'),
  createAt: attr('date'),
  latitude: attr('number'),
  locationImageUrl: attr('string'),
  longitude: attr('number'),
  name: attr('string'),
  postcode: attr('string'),
  town: attr('string'),
  updatedAt: attr('date'),
});
