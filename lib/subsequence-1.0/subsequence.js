const describe = function(desc, fn) {
  console.log(desc)
  fn()
}

const testWill = function(msg, fn) {
  describe(' ' + msg, fn)
}


const matchers = (value) => ({
  toBeEqualTo: (comparator) => {
    if (value === comparator) {
      console.log('%cSuccess', 'color:green')
      return true
    } else {
      console.log('%cFailure', 'color:red')
      console.trace()
      return false
    }
  },

  toThrow: (comparator) => {
    var error = 'Failure'
    try {
      value()
    }
    catch(e) {
      error = 'Success' //+ e.stack
    }
    finally {
      if (error = 'Success') {
        console.log('%cSuccess', 'color:green')
      } else {
        console.log('%cFailure', 'color:red')
        console.trace()
      }
    }
  }
})

const expect = (value) => matchers(value)
