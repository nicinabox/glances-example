var every = require('glances-app/utils/every')

var currentTime = function () {
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  return [
    hours < 10 ? '0' + hours : hours,
    minutes < 10 ? '0' + minutes : minutes,
    seconds < 10 ? '0' + seconds : seconds,
  ].join(':')
}

var tile = {
  title: 'Server Time',
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
