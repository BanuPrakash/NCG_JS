import React, { useEffect, useState } from 'react'

export default function UsersComponent({setId}) {
  // state
  let [users, setUsers] = useState();

  function cleanup() {
    // componentWillUnmount
  }
  
  // [] --> to make it work like componentDidMount()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));

    // returned fn will act like componentWillUnmount
    return () => cleanup();
  },[]);
  
  return (
    <div>
        <h1> Users </h1>{
            users && users.map(user => <div key={user.id}
            onMouseEnter={() => setId(user.id)}
            >
                {user.username}, {user.email}
            </div>)
        }
    </div>
  )
}
