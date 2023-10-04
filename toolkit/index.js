const store = require('./app/store')
const fetchUsers = require('./features/user/userSlice').fetchUsers
const cakeAction = require('./features/cake/cakeSlice').cakeAction
const icecreamAction =
  require('./features/icecream/icecreamSlice').icecreamAction

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(6))

// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(3))

// unsubscribe()
