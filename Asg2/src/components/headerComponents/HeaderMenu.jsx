import { useContext } from "react";
import { AppContext } from "../../F1Context";

/*
 * Returns the header menu items (about and favourites)
 *  Onclick will display the proper modals
 */
const HeaderMenu = () => {
    const { setFavoriteView, setAboutView } = useContext(AppContext);

    // Sets the favourite model state to true
    const handleFavoriteClick = () => {
        setFavoriteView(true);
    }

    // Sets the about model state to true
    const handleAboutClick = () => {
        setAboutView(true);
    }

    return (
        <div className="flex items-center py-5 mx-2 font-montserrat font-bold">
            <button type="button" className=" text-gray-1000 hover:text-red-500 rounded-lg text-2xl px-5 py-2" onClick={handleFavoriteClick}>Favorites</button>
            <button type="button" className="text-gray-1000 hover:text-red-500  text-2xl bg-primary-700 rounded-lg px-5 py-2" onClick={handleAboutClick}>About</button>
        </div>

    );
}

export default HeaderMenu