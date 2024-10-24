module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/right',
        handler: 'right.find',
        config: {
          auth: false,
        },
      },
    ],
  };