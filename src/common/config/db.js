'use strict'
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: 'sg.godotdotdot.com',
      port: '3306',
      database: 'little_fairy',
      user: 'chukui',
      password: 'chukui',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
}
