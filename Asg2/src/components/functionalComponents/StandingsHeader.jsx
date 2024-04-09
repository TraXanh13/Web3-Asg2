/* eslint-disable react/prop-types */

/*
 * Creates the table heads for the Standings data
 *
 * @className: the classes to set up the th
 * @children: the table head value
 */
const StandingsHeader = ({ className, children }) => {
    return (
        <th className={className} >
            {children}
        </th>
    );
};

// Default className and tailwind styling
StandingsHeader.defaultProps = {
    className: "py-2 font-bold text-lg font-montserrat cursor-default",
}

export default StandingsHeader;