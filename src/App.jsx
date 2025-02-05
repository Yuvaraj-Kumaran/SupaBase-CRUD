import React,{useEffect, useState} from "react";
import { supabase } from "./CreateClient";

const App = () => {

  const [users, setUsers] = useState([])
  console.log(users);

  useEffect(() => {
   fetchUsers();
  }, [])
  
  async function fetchUsers () {
    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
      
  }

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
          <tr key={user.id || ""}> 
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;