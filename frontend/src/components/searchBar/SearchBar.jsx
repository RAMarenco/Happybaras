import "./SearchBar.scss";

const SearchBar = ({ value, placeHolder, onSearchChange }) => {
    const handleChange = (e) => {
        onSearchChange(e.target.value);
    }

    return(
        <input 
            className="searchbar"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
        >
            
        </input>
    )
}

export default SearchBar;