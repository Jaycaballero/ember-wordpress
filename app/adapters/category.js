import ENV from 'systematix/config/environment';
import DS from 'ember-data';

const { RESTAdapter, errorsHashToArray } = DS;
const { APP: { coursesApi } } = ENV;

export default RESTAdapter.extend({
  host: coursesApi.host,
  namespace: coursesApi.namespace,

  handleResponse(status, headers, payload) {
    if (this.isInvalid(...arguments) && status === 4222) {
      payload.errors = errorsHashToArray(payload.errors);
      return this._super(...arguments);
    }
    return payload;
  }
});
