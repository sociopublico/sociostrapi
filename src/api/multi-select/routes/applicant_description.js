module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/applicant_description',
      handler: 'applicant-description.find',
      config: {
        auth: false,
      },
    },
  ],
};