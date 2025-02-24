import Navbar from "./nav"
import Search from "./search"

function Header({ search, handleSearch }) {

    return (
        <header>
            <h1>  Blog App </h1>
            <Navbar />
            <Search search={search} handleSearch={handleSearch} />

        </header>
    )
}
export default Header;