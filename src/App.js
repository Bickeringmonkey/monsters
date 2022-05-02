import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const OnSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

    

  return (
          <div className="App">
          <h1 className='app-title'>Monster Rolodex</h1>

            <SearchBar 
            className = 'monster-search-box'
            onChangeHandler={ OnSearchChange }
            placeholder='search monsters'
            />
            <CardList monsters={filteredMonsters} />
          </div>
        );
}

// class App extends Component {
// constructor() {
//   super();

//   this.state = {
//     monsters: [],
//     searchField: '',
//   }
//   console.log('constructor');
// }

// componentDidMount() {
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     },
//     () => {
//       console.log(this.state);
//     }));
// }

// OnSearchChange = (event) => {
//   console.log(event.target.value);
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   })
// }

//   render() {
//     console.log('Render');
    
//     const { monsters, searchField } = this.state;
//     const { OnSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBar 
//         className = 'monster-search-box'
//         onChangeHandler={ OnSearchChange }
//         placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
