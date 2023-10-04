const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

const initialState = {
  name: 'Sami',
  address: {
    street: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
  },
}

const STREET_UPDATE = 'STREET_UPDATE'

function updateStreet(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  }
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   }
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    default:
      return state
  }
}

const store = createStore(cakeReducer)
// Store.getState() allows to get the state
console.log('initial state', store.getState())

// Listen to any changes that happened to the state
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

store.dispatch(updateStreet('456 Mian St.'))

unsubscribe()
