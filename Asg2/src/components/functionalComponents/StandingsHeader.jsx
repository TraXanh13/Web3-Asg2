import React from "react";

const StandingsHeader = ({ className, children }) => {
    return (
        <th className={className} >
            {children}
        </th>
    );
};

//Setting default props for the button class
StandingsHeader.defaultProps = {
    className: "py-2 font-bold text-lg font-montserrat cursor-default", //default className and tailwind styling
}

export default StandingsHeader;