
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://user-management-server-gamma.vercel.app/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
// user handle
const handleAddUser = event => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = { name, email}
  console.log(user);
  fetch(`https://user-management-server-gamma.vercel.app/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const newUsers = [...users, data]
    setUsers(newUsers);
    form.reset();
  });

}
  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id=""  placeholder='Name' required/>
        <br />
        <input type="email" name="email" id="" placeholder='Email' required/>
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
