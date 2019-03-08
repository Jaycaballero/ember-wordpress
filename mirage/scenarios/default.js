export default function(server) {

//  server.loadFixtures('categories');
//  server.loadFixtures('sub-categories');

  server.create('category', {
    title: 'Adobe',
    slug: 'adobe',
    priority: 1,
    image: 'assets/images/bulb.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-excel.svg',
        slug: 'acrobat',
        title: 'Acrobat',
        priority: 1,
        introtext: 'View, create, manipulate, print and manage files in PDF',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-access.svg',
        slug: 'dreamweaver',
        title: 'Dreamweaver',
        priority: 2,
        introtext: 'Web design and development application.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-visio-ico.svg',
        image: '/assets/images/ms-word.svg',
        slug: 'flash',
        title: 'Flash',
        priority: 3,
        introtext: 'Internet applications, and streaming audio and video.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'photoshop',
        title: 'Photoshop',
        priority: 4,
        introtext: 'Raster graphics editor',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'Business',
    slug: 'business',
    priority: 3,
    image: 'assets/images/analysis.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-excel.svg',
        slug: 'lorem-ipsum-1',
        title: 'Lorem Ipsum 1',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-access.svg',
        slug: 'lorem-ipsum-2',
        title: 'Lorem Ipsum 2',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-word.svg',
        slug: 'lorem-ipsum-3',
        title: 'Lorem Ipsum 3',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-visio-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'lorem-ipsum-4',
        title: 'Lorem Ipsum 4',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'Cisco',
    slug: 'cisco',
    priority: 4,
    image: 'assets/images/account.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-excel.svg',
        slug: 'lorem-ipsum-5',
        title: 'Lorem Ipsum 5',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-access.svg',
        slug: 'lorem-ipsum-6',
        title: 'Lorem Ipsum 6',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-word.svg',
        slug: 'lorem-ipsum-7',
        title: 'Lorem Ipsum 7',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'lorem-ipsum-8',
        title: 'Lorem Ipsum 8',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'Citrix',
    slug: 'citrix',
    priority: 5,
    image: 'assets/images/management.svg',
    subCategories: [
      server.create('sub-category', {
        slug: 'lorem-ipsum-9',
        title: 'Lorem Ipsum 9',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        slug: 'lorem-ipsum-10',
        title: 'Lorem Ipsum 10',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        slug: 'lorem-ipsum-11',
        title: 'Lorem Ipsum 11',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        slug: 'lorem-ipsum-12',
        title: 'Lorem Ipsum 12',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'CompTIA',
    slug: 'comptia',
    priority: 5,
    image: 'assets/images/password.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-excel.svg',
        slug: 'lorem-ipsum-13',
        title: 'Lorem Ipsum 13',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-access.svg',
        slug: 'lorem-ipsum-14',
        title: 'Lorem Ipsum 14',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-word.svg',
        slug: 'lorem-ipsum-15',
        title: 'Lorem Ipsum 15',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'lorem-ipsum-16',
        title: 'Lorem Ipsum 16',
        priority: 3,
        introtext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    id: 6,
    title: 'Microsoft Office',
    slug: 'microsoft-office',
    priority: 2,
    image: 'assets/images/cloud.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-excel.svg',
        slug: 'ms-excel-training',
        title: 'MS Excel Training',
        priority: 5,
        introtext: 'Features calculation, graphing, tools, pivot tables',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-access.svg',
        slug: 'ms-access-training',
        title: 'MS Access Training',
        priority: 6,
        introtext: 'Database management system.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-word-ico.svg',
        image: '/assets/images/ms-word.svg',
        slug: 'ms-word-training',
        title: 'MS Word Training',
        priority: 7,
        introtext: 'Word processor.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'ms-ppt-training',
        title: 'MS PPT Training',
        priority: 8,
        introtext: 'It is a long established fact that a reader will be distracted by the readable content.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/ms-visio-ico.svg',
        image: '/assets/images/ms-visio-training.svg',
        slug: 'ms-visio-training',
        title: 'MS Visio Training',
        priority: 9,
        introtext: 'It is a long established fact that a reader will be distracted by the readable content.',
        categories: []
      }),
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-publisher-training.svg',
        slug: 'ms-publisher-training',
        title: 'MS Publisher Training',
        priority: 10,
        introtext: 'It is a long established fact that a reader will be distracted by the readable content.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'Other Technical',
    slug: 'other-technical',
    priority: 5,
    image: 'assets/images/notepad.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'citrix',
        title: 'Citrix',
        priority: 4,
        introtext: 'Citrix course will provide the skills needed to pass the Citrix XenApp 6.5 Administration exam.',
        categories: []
      }),
    ]
  });

  server.create('category', {
    title: 'Project Management',
    slug: 'proejct-management',
    priority: 5,
    image: 'assets/images/skills.svg',
    subCategories: [
      server.create('sub-category', {
        icon: '/assets/images/power-point-ico.svg',
        image: '/assets/images/ms-ptt-training.svg',
        slug: 'citrix',
        title: 'Citrix',
        priority: 4,
        introtext: 'Citrix course will provide the skills needed to pass the Citrix XenApp 6.5 Administration exam.',
        categories: []
      }),
    ]
  });

  server.createList('course', 1, {
    category: server.schema.categories.find(1),
    subCategory: server.schema.subCategories.find(1)
  });
}
