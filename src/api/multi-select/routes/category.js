module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/category',
        handler: 'category.find',
        config: {
          auth: false,
        },
      },
    ],
  };