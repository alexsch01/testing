module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(str) {
          console.log(str)
          return null
        },
      })
    },
  },
};
