const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
// ACTION
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED'
// action creater
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  }
}

function restokCake(qty) {
  return {
    type: CAKE_RESTOKED,
    payload: qty,
  }
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  }
}

function restokIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKED,
    payload: qty,
  }
}
// State : muat be an object
const initialCakeState = {
  numOfCakes: 10,
}
const initialIceCreamState = {
  numofIceCreams: 20,
}
// Reducers
// (preState , action) => new state
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case CAKE_RESTOKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      }
    case ICECREAM_RESTOKED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams + action.payload,
      }
    default:
      return state
  }
}

// Combine multiple Reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

// Store
// Create a store
const store = createStore(rootReducer, applyMiddleware(logger))
// Store.getState() allows to get the state
console.log('initial state', store.getState())

// Listen to any changes that happened to the state
const unsubscribe = store.subscribe(() => {})

// Allowing to update state
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokCake(8))

const actions = bindActionCreators(
  { orderCake, restokCake, orderIceCream, restokIceCream },
  store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()

actions.restokCake(8)
actions.restokIceCream(15)
// Stop listening to the redux state
unsubscribe()
