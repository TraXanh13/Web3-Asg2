const HeaderMenu = (props) => {
    return (
        <div className="flex items-center py-5 mx-2">
            <button className="text-amber-600 dark:text-red font-medium rounded-lg text-2xl px-4 lg:px-5 py-2 lg:py-2.5">Favorites</button>
            <button className="text-amber-600 text-2xl bg-primary-700 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5">About</button>
        </div>

    );
}

export default HeaderMenu