export default {
  namespaced: true,

  supply: {
    use: ['Events'],
    inject: ({ Events }) => ({
      getters: {
        'all-events': () => Events.events,
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-events'].length,
  },
}
