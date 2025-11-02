import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchItem, setSearchItem] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchItem(value);
        onSearch(value);
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
    };

    const inputStyle = {
        width: "50%",
        padding: "10px 15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontSize: "16px",
        transition: "all 0.3s ease",
        outline: "none",

    };

    return (
        <div style={containerStyle}>
            <input
                type="text"
                value={searchItem}
                onChange={handleChange}
                placeholder='search item...'
                style={inputStyle}
            />
        </div>
    )
}

export default SearchBar;