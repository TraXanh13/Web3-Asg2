/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import HeaderSeasonSelect from "./HeaderSeasonSelect";
import HeaderMenu from "./HeaderMenu";

const HeaderApp = (props) => {

    //fetch seasons here
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        getAllSeasons();
    }, []);

    async function getAllSeasons() {
        const { data, error } = await props.supabase
            .from('seasons')
            .select()
            .gte('year', 2000)
            .lte('year', 2023)
            .order('year', { ascending: false });

        setSeasons(data);
    }

    return (
        // 
        // <header className="header">
        //     <HeaderSeasonSelect seasons={seasons}/>
        //     <HeaderMenu />
        // </header>

        <header>
            <nav className="bg-gray-200 border-gray-200 px-2 lg:px-3 py-2 dark:white">
                <div className="flex flex-wrap justify-between items-end mx-auto">
                    <div className="lg:flex lg:w-auto lg:order-0">
                        <img src="/F1_Fusion_Logo.svg" title="Site Logo" alt="Site Logo" className="h-24 w-auto mx-4" />
                        <HeaderSeasonSelect seasons={seasons} />
                    </div>

                    <div className="flex items-center py-5 mx-2">
                        <a href="#" className="text-amber-600 dark:text-red font-medium rounded-lg text-2xl px-4 lg:px-5 py-2 lg:py-2.5 ">Favorites</a>
                        <a href="#" className="text-amber-600 text-2xl bg-primary-700 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 ">About</a>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderApp