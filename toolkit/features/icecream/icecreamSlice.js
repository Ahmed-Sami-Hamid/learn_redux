const cakeAction = require('../cake/cakeSlice').cakeAction

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numofIcecream: 10,
}
const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofIcecream--
    },
    restocked: (state, action) => {
      state.numofIcecream += action.payload
    },
  },
  extraReducers: {
    ['cake/ordered']: (state) => {
      state.numofIcecream--
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(cakeAction.ordered, (state) => {
  //       state.numofIcecream--
  //     })
  //   },
})

module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions
