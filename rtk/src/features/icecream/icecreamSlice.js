import { ordered as cakeOrdered } from '../cake/cakeSlice'

import { createSlice } from '@reduxjs/toolkit'

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
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numofIcecream--
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numofIcecream--
    })
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
