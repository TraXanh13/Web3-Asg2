/* eslint-disable react/prop-types */

/*
 * Component to build the add to favourites buttons
 *
 * @className: the tailwind classes assigned to the button
 * @onClick: event handler for button press
 * @children: the button name
 * @disabledStatus: T/F if the button is clickable
 */
const Button = ({ className, onClick, children, disabledStatus }) => {
    // Changes the style of the button if disabled
    if (disabledStatus) {
        className = "font-barlow-condensed text-center text-lg font-bold cursor-not-allowed px-2 text-red-400"
    }

    return (
        <button type="button" disabled={disabledStatus} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

//Setting default props for the button class
Button.defaultProps = {
    className: "bg-transparent px-2 py-2 text-lg font-bold hover:text-red-700 font-barlow-condensed ", //default className and tailwind styling
    onClick: () => { },   //default onClick function
    disabledStatus: false,
}

export default Button;