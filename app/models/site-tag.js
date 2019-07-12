import DS from 'ember-data';
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  groupName: attr('string'),
  priority: attr('number'),
  name: attr('string'),

  courses: hasMany('course'),

  idName: computed('name', function() {
    return dasherize(this.name);
  }),
  hrefId: computed('name', function() {
    return `#${dasherize(this.name)}`;
  }),
});
