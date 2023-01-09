// import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import React, { useState } from 'react';
import Button from '../UI/Button';
const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 1) return;
    console.log(userName, age);
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
  return (
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
  );
};

export default AddUser;
