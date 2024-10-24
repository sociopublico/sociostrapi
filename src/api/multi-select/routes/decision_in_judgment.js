module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/decision_in_judgment',
        handler: 'decision-in-judgment.find',
        config: {
          auth: false,
        },
      },
    ],
  };