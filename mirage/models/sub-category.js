import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  categories: hasMany('category')
});
