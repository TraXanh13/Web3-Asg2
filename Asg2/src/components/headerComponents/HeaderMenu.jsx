import { useContext } from "react";
import { AppContext } from "../../F1Context";

const HeaderMenu = (props) => {
    const { setFavoriteView, setAboutView } = useContext(AppContext);

    const handleFavoriteClick = (e) => {
        setFavoriteView(true);
    }
    const handleAboutClick = (e) => {
        setAboutView(true);
    }

    return (
        <div className="flex items-center py-5 mx-2">
            <button type="button" className=" text-gray-1000 hover:text-red-500 font-medium rounded-lg text-2xl px-5 py-2" onClick={handleFavoriteClick}>Favorites</button>
            <button type="button" className="text-gray-1000 hover:text-red-500  text-2xl bg-primary-700 font-medium rounded-lg px-5 py-2" onClick={handleAboutClick}>About</button>
        </div>

    );
}

export default HeaderMenu