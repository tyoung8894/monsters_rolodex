import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    //bind returns new function where context of this is set to whatever you pass
    //this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //js doesn't set context of 'this', doesn't set its scope of 'this' on functions
  //you have to explicity state what contect you want this to be
  // handleChange(e){
  //   this.setState(this.setState({searchField: e.target.value}));
  // }

  //automatically bind this to place where arrow function is defined, context of arrow function is 
  //our app component
  //get automatic lexical scoping-> bind the this context to the place where they were defined in first place

  //binds this and any references to it to the context in which defined
   handleChange = (e) => {
     this.setState(this.setState({searchField: e.target.value}));
   }

  //setState rerenders our component when properties change, calls render method
  //lift state up so it can pass down the info to different components in the tree, structuring state
  render(){
    const {monsters, searchField} = this.state; //desctructuring, pull off properties from obj and make const for each
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}


export default App;