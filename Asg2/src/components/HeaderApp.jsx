import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import HeaderSeasonSelect from "./HeaderSeasonSelect";
import HeaderMenu from "./HeaderMenu";

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_ANON_KEY);

const HeaderApp = (props) => {

    //fetch seasons here
    const [seasons, setSeasons] = useState([]);


    useEffect(() => {
        getAllSeasons();
    }, []);
    
    async function getAllSeasons() {
        const {data, error} = await supabase
        .from('seasons')
        .select()
        .order('year', {ascending: false});

        setSeasons(data);
    }

    return (
        <header className="header">
            <HeaderSeasonSelect seasons={seasons}/>
            <HeaderMenu />
        </header>
    );
}

export default HeaderApp