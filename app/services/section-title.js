import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'http://localhost:8080',
  namespace: 'systematix/wp-json/wp/v2'
});
