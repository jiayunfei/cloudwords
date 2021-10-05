if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/app.min.js')
} else {
  module.exports = require('./lib/app.js')
}