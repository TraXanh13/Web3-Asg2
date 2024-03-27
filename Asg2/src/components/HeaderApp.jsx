import { useState, useEffect } from "react";
import HeaderSeasonSelect from "./HeaderSeasonSelect";
import HeaderMenu from "./HeaderMenu";

const HeaderApp = (props) => {

    //fetch seasons here
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const url = "https://zest-jolly-advantage.glitch.me/api/seasons";

        fetch(url)
            .then(resp => resp.json())
            .then(data => setSeasons(data))
    }, []);

    return (
        <header className="header">
            <HeaderSeasonSelect seasons={seasons} />
            <HeaderMenu />
        </header>
    );
}

export default HeaderApp