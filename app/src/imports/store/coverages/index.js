export default {
  namespaced: true,

  supply: {
    use: ['Coverages'],
    inject: ({ Coverages }) => ({
      getters: {
        'all-coverages': () => Coverages.coverages,
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-coverages'].length,
  },
}
