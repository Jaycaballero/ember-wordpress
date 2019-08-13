import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  price: attr('number'),
  startTime: attr('string'),
  endTime: attr('string'),
  startDate: attr('string'),
  endDate: attr('string'),

  course: belongsTo('course'),
  location: belongsTo('bifrost-location')
});
