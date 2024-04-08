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
    className: "font-bold text-base", //default className and tailwind styling
}

export default StandingsHeader;