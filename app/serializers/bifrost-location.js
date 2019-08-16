import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  modelNameFromPayloadKey() {
    return 'bifrost-location';
  },
  payloadKeyFromModelName() {
    return 'location';
  }
});
