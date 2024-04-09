/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import HeaderSeasonSelect from "./HeaderSeasonSelect";
import HeaderMenu from "./HeaderMenu";

/*
 * Returns the header component
 * @supabase: The supabase object
 */
const HeaderApp = (props) => {

    // The list of seasons
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        getAllSeasons();
    }, []);

    /*
     * Queries supabase to find the corresponding seasons
     *  and sets the seasons useState 
     */
    async function getAllSeasons() {
        const { data } = await props.supabase
            .from('seasons')
            .select()
            .gte('year', 2000)
            .lte('year', 2023)
            .order('year', { ascending: false });

        setSeasons(data);
    }

    return (
        <header>
            <nav className=" bg-red-100 border-red-100 px-2 h-24 dark:white">
                <div className="flex flex-wrap justify-between items-end mx-auto">
                    <div className="lg:flex lg:w-auto lg:order-0">
                        <img src="/images/F1_Fusion_Logo.svg" title="Site Logo" alt="Site Logo" className="h-24 w-auto mx-4" />
                        <HeaderSeasonSelect seasons={seasons} />
                    </div>

                    <HeaderMenu />
                </div>
            </nav>
        </header>
    );
}

export default HeaderApp