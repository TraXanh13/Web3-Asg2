import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderMenu = (props) => {
    return (
        // <nav>
        //     <Link to="/favorites">
        //         <button className="favorites">Favorites</button>
        //     </Link>
        //     <Link to="/about">
        //         <button className="about">About</button>
        //     </Link>
        // </nav>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/favorites">
                <Button>Favorites</Button>
            </Link>

            <Link to="/about">
            <Button>About</Button>
            </Link>
        </Box>
    );
}

export default HeaderMenu