
import './App.css';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor(){
    console.log('Constructor');
    super();
    this.state = {
     users:[],
     searchField: ''
    };
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState(
        () => {
          return { users: responseJson};
        },
        () => {
          console.log(this.state);
        }
      )
    }

    );
  }


  render(){
    console.log('render');
    const filteredUsers = this.state.users.filter( (user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField);
    })
    const onChangeHandler = (event) => {
      console.log(event)
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {
        return { searchField }
      });
    };

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

  
  
}

export default App;
