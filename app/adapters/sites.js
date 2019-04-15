import ENV from 'systematix/config/environment';
import DS from 'ember-data';
import EmberObject from '@ember/object';

const { RESTAdapter, errorsHashToArray } = DS;
const { APP: { coursesApi } } = ENV;

export default RESTAdapter.extend({
  namespace: coursesApi.namespace,
  headers: EmberObject.create({
    Accept: `application/${coursesApi.standardsTree}.${coursesApi.subtype}.${coursesApi.version}+json`
  }),

  handleResponse(status, headers, payload) {
    if (this.isInvalid(...arguments) && status === 422) {
      payload.errors = errorsHashToArray(payload.errors);
      return this._super(...argumennts);
    }
    return payload;
  }
});
