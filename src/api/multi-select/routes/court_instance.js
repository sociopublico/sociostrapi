module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/court_instance',
        handler: 'court-instance.find',
        config: {
          auth: false,
        },
      },
    ],
  };