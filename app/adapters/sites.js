import DS from 'ember-data';
import EmberObject from '@ember/object';
import ENV from 'systematix/config/environment';


const { RESTAdapter, errorsHashToArray } = DS;

export default RESTAdapter.extend({
  namespace: 'api/site',
  // host: ENV.APP.coursesApi.host,
  headers: EmberObject.create({
    Accept: `application/x.systematix.v1+json`
  }),

  handleResponse(status, headers, payload) {
    if (this.isInvalid(...arguments) && status === 422) {
      payload.errors = errorsHashToArray(payload.errors);
      return this._super(...arguments);
    }
    return payload;
  }
});
