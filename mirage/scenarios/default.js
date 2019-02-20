export default function(server) {

  server.loadFixtures('categories');
  server.loadFixtures('sub-categories');

  server.createList('course', 1, {
    category: server.schema.categories.find(1),
    subCategory: server.schema.subCategories.find(1)
  });
}

