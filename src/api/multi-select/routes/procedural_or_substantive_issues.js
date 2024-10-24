module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/procedural_or_substantive_issues',
        handler: 'procedural-or-substantive-issues.find',
        config: {
          auth: false,
        },
      },
    ],
  };