import { Factory, hasMany, faker } from 'ember-cli-mirage';

export default Factory.extend({
  categories: hasMany(),
  description() {
    return faker.lorem.sentence();
  },
  title() {
    return faker.random.words();
  },
  slug() {
    return faker.lorem.slug;
  }
});
