import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
const IceCreamView = () => {
  const numofIceCreams = useSelector((state) => state.icecream.numofIcecream)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(1)
  return (
    <div>
      <h2>Number of icecreams | {numofIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecreams
      </button>
    </div>
  )
}

export default IceCreamView
