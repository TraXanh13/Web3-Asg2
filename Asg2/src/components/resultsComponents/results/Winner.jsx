import { useContext } from "react"
import { AppContext } from "../../../F1Context"

const Winner = () => {
    const { resultsData } = useContext(AppContext)
    
    if(resultsData.length > 0){

        return(
            <div className="border col-span-3 row-span-10">
            <h4>{resultsData[0].drivers.forename} {resultsData[0].drivers.surname}</h4>
        </div>
        )
    }

    return (
        <div className="border col-span-3 row-span-10">
            Winner
        </div>
    )
}

export default Winner;