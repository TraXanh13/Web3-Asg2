import React from "react";

const Button = ({ className, onClick, children, disabledStatus }) => {
    if (disabledStatus) {
        className = "text-gray-400 bg-transparent px-2 rounded-lg cursor-not-allowed"
    }

    return (
        <button type="button" disabled={disabledStatus} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

//Setting default props for the button class
Button.defaultProps = {
    className: "text-gray-400 bg-transparent px-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto inline-flex justify-right items-center dark:hover:bg-gray-600 dark:hover:text-white", //default className and tailwind styling
    onClick: () => { },   //default onClick function
    disabledStatus: false,
}

export default Button;