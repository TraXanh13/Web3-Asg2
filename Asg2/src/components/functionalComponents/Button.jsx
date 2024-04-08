/* eslint-disable react/prop-types */

const Button = ({ className, onClick, children, disabledStatus }) => {
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