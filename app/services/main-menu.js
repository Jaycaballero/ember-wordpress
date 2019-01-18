import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'systematix/config/environment';

export default AjaxService.extend({
  host: ENV.wordpressHost,
  namespace: 'systematix/wp-json/wp-api-menus/v2'
});
