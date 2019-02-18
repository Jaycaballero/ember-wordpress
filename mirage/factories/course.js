import { Factory, association, faker } from 'ember-cli-mirage';

export default Factory.extend({
  category: association(),
  subCategory: association(),
  version() {
    return faker.random.number();
  },
  level_numeric() {
    return faker.random.number();
  },
  days()  {
    return faker.random.number();
  },
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
