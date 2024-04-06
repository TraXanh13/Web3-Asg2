import { useState, useEffect, useContext } from "react";
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
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-red-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <HeaderSeasonSelect seasons={seasons} />
                    <div className="flex items-center lg:order-2">
                        <a href="#" className="text-gray-800 dark:text-white font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Favorites</a>
                        <a href="#" className="text-white text-xl bg-primary-700 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">About</a>

                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <h1 className="text-white uppercase rounded-lg font-bold text-2xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2">F1 Fusion</h1>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderApp