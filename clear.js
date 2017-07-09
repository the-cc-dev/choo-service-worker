module.exports = clear

function clear () {
  return function (state, emitter) {
    emitter.prependListener(state.events.DOMCONTENTLOADED, function () {
      var registrations = navigator.serviceWorker.getRegistrations()
      registrations.then(function (registrations) {
        Object.keys(registrations).forEach(function (key) {
          var registration = registrations[key]
          registration.unregister()
        })
      })
    })
  }
}
