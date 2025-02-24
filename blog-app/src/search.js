const Search = ({ search, handleSearch }) => {
    return (
        <form>
            <label htmlFor="SearchBox">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch} // Fixed function name
                />
            </label>
        </form>
    );
};

export default Search;
