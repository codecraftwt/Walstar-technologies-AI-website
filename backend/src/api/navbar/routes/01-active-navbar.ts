export default {
  routes: [
    {
      method: 'GET',
      path: '/navbars/active',
      handler: 'navbar.active',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
