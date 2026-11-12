export default {
  routes: [
    {
      method: 'GET',
      path: '/pages/resolve/:slug',
      handler: 'page.resolve',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
