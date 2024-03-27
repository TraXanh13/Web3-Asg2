import { Link } from "react-router-dom";

const HeaderMenu = (props) => {
    return (
        <nav>
            <Link to="/favorites">
                <button className="favorites">Favorites</button>
            </Link>
            <Link to="/about">
                <button className="about">About</button>
            </Link>
        </nav>
    );
}

export default HeaderMenu