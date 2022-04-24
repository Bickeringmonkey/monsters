import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: '',
  }
  console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state);
    }));
}

OnSearchChange = (event) => {
  console.log(event.target.value);
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  })
}

  render() {
    console.log('Render');
    
    const { monsters, searchField } = this.state;
    const { OnSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBar 
        className = 'search-box'
        onChangeHandler={ OnSearchChange }
        placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
