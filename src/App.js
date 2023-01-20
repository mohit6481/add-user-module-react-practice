import React, {useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const DUMMY_USERS = [{
  id: '1',
  name: 'Mohit',
  age: '28'
}]

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevState) => [user, ...prevState])
  }
  return <div>
    <AddUsers onAddUser={addUserHandler} />
    <UserList users={users}/>
  </div>;
}

export default App;
