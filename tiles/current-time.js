var every = require('glances-app/utils/every')

var currentTime = function () {
  var date = new Date()
  var minutes = date.getMinutes()

  return [
    date.getHours(),
    minutes < 10 ? '0' + minutes : minutes,
    date.getSeconds()
  ].join(':')
}

var tile = {
  title: 'Time',
  value: currentTime()
}

module.exports = function (emit) {
  every('1 sec', 'update time', function (next) {
    emit(Object.assign({}, tile, {
      value: currentTime()
    }))
    next()
  })

  return tile
}
