
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  console.log('render');

  useEffect(() => {
    console.log('effect on filteredUsers')
    const newFilteredUsers = users.filter( (user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => setUsers(responseJson))
    .then(console.log('effect on Users'))
  }, []);

  
  return (
    <div className="App">
      <h1 className='app-title'>Users</h1>
      <SearchBox
        className='search-box'
        placeholder='Search Users'
        onChangeHandler={onChangeHandler}
      />
      <CardList itemList={filteredUsers}/>
    </div>
  );

}

export default App;