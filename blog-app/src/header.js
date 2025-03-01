import Navbar from "./nav";
import Search from "./search";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
function Header({ search, handleSearch, width }) {

    return (
        <header>
            <div className="headerCompons">
                <h1>  Blog App </h1>
                <h1>
                    {width < 768 ? <FaMobileAlt />
                        : width < 992 ? <FaTabletAlt />
                            : <FaLaptop />}
                </h1>
            </div>
            <div>

                <Search search={search} handleSearch={handleSearch} /> <Navbar />
            </div>

        </header>
    )
}
export default Header;