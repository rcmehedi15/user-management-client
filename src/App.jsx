
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://user-management-server-gamma.vercel.app/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <form >
        <input type="text" name="name" id=""  placeholder='Name'/>
        <br />
        <input type="email" name="email" id="" placeholder='Email'/>
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
