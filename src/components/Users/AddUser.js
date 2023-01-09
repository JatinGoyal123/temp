// import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Empty name or age fields',
        message: 'plese fill the values',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Error in age',
        message: 'plese fill the valid age',
      });
      return;
    }
    console.log(userName, age);
    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  };
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };
  const userAgeChangeHandler = (e) => {
    setAge(e.target.value);
    // console.log(age);
  };
  const errorModalHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={userName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={userAgeChangeHandler}
            value={age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
