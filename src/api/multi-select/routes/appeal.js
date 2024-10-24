module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/appeal',
        handler: 'appeal.find',
        config: {
          auth: false,
        },
      },
    ],
  };