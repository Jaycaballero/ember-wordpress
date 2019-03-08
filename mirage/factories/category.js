import { Factory, hasMany, faker } from 'ember-cli-mirage';

export default Factory.extend({
  subCategories: hasMany(),
  description() {
    return faker.lorem.sentence();
  },
  title() {
    return faker.random.words();
  },
  slug() {
    return faker.lorem.slug;
  },
  image() {
    return 'assets/images/bulb.svg';
  }
});
