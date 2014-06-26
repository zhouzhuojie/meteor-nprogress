assert = require 'assert'

suite 'NProgress', ->

  test 'Environment Setup', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isNProgressExist', NProgress?
    client.once 'isNProgressExist', (expectTrue) ->
      assert expectTrue
      done()

  test 'NProgress api', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isNProgressAPI', _.every [
          NProgress.start?
          NProgress.done?
        ]
    client.once 'isNProgressAPI', (expectTrue) ->
      assert expectTrue
      done()
