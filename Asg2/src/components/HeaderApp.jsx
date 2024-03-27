import { useState, useEffect } from "react";
import HeaderSeasonSelect from "./HeaderSeasonSelect";
import HeaderMenu from "./HeaderMenu";
import { AppBar, Toolbar } from "@mui/material";

const HeaderApp = (props) => {

    //fetch seasons here
    const [seasons, setSeasons] = useState([]);


    useEffect(() => {
        getAllSeasons();
    }, []);
    
    async function getAllSeasons() {
        const {data, error} = await props.supabase
        .from('seasons')
        .select()
        .order('year', {ascending: false});

        setSeasons(data);
    }

    return (
        <AppBar>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
        // <header className="header">
        //     <HeaderSeasonSelect seasons={seasons}/>
        //     <HeaderMenu />
        // </header>
    );
}

export default HeaderApp