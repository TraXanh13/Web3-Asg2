import { useContext } from "react"
import { AppContext } from "../../F1Context"
import React from "react";

const CircuitView = (props) => {
    const { setCircuitView, setCircuit } = useContext(AppContext);

    const handleCircuitOpen = () => {
        setTimeout(() => {
            setCircuitView(true);
        }, 150);

        getCircuitData();
    }

    async function getCircuitData() {
        const { data, err } = await props.supabase
            .from("circuits")
            .select()
            .eq("circuitId", props.circuitId)

        if (err) {
            console.error(err);
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.circuitId} does not exist in the DB ${err}`);
            return
        }

        setCircuit(data);

    }


    return (
        <a target="_blank"
            rel="noopener noreferrer"
            onClick={handleCircuitOpen}
            className={props.className}>
            {props.name}
        </a>
    )
}

export default CircuitView;