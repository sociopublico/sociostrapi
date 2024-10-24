module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/hazard',
        handler: 'hazard.find',
        config: {
          auth: false,
        },
      },
    ],
  };