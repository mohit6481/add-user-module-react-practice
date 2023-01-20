import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/Helpers/Wrapper";

const DUMMY_USERS = [
  {
    id: "1",
    name: "Mohit",
    age: "28",
  },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevState) => [user, ...prevState]);
  };

  // Custom Wrapper
  return <Wrapper>
    <AddUsers onAddUser={addUserHandler} />
    <UserList users={users}/>
  </Wrapper>;


  // React inbuild Wrapper
  // return (
  //   <React.Fragment>
  //     <AddUsers onAddUser={addUserHandler} />
  //     <UserList users={users} />
  //   </React.Fragment>
  // );
};

export default App;
