module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/internal_or_cross_border',
        handler: 'internal-or-cross-border.find',
        config: {
          auth: false,
        },
      },
    ],
  };