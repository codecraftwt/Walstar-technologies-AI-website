export default {
  routes: [
    {
      method: 'GET',
      path: '/landing',
      handler: 'landing.index',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
