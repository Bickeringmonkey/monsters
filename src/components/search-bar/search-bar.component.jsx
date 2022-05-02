import './search-bar.styles.css';

const SearchBar = ({className, placeholder, onChangeHandler}) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={ onChangeHandler }
    />
);
    
export default SearchBar;