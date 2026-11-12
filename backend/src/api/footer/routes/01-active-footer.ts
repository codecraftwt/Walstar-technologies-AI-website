export default {
  routes: [
    {
      method: 'GET',
      path: '/footers/active',
      handler: 'footer.active',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
