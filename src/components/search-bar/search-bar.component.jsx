import { Component } from 'react';

class SearchBar extends Component {

    render() {
        return(
            <input 
            className={this.props.className} 
            type='search' 
            placeholder={this.props.placeholder}
            onChange={ this.props.onChangeHandler }
             />
        )
    }
}

export default SearchBar;