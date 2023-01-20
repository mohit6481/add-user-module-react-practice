import Card from "../UI/Card";
import { useState, useRef } from "react";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0.)",
      });
      return;
    }
    onAddUser({ name: enteredName, age: enteredUserAge, id: Math.random() });

    // Shouldnt use REF to manipulate DOM in large project, but its okay if this is small change and should be done rarely
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      ({error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />})
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            // onChange={userNameChangeHandler}
            // value={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
