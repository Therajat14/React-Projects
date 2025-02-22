import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <form>
            <label htmlFor="SearchBox">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
};

export default Search;