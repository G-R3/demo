import React from "react";
import Dropdown from "./Dropdown";

export default function Subnav({ setAlgorithm, visualize }) {
    return (
        <nav>
            <Dropdown setAlgorithm={setAlgorithm} />

            <button onClick={visualize}>Visualize</button>
        </nav>
    );
}
