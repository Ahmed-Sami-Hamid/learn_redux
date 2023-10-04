import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading ? (
        <div>Loading...</div>
      ) : user.error ? (
        <div>Error: {user.error}</div>
      ) : user.users.length ? (
        <ol>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      ) : (
        <div>No users to display</div>
      )}
    </div>
  )
}

export default UserView
