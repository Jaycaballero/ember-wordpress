import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  include() {
    return ['categories', 'sub-categories'];
  }
});