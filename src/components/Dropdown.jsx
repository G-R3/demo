import React, { useState } from "react";

export default function Dropdown({ setAlgorithm }) {
    const [isOpen, setIsOpen] = useState(false);
    const [val, setVal] = useState("");
    const dropdownValues = [
        {
            title: "Dijkstra",
        },
        {
            title: "A* Pathfinding",
        },
    ];

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSetValue = (val) => {
        setVal(val.title);
        setAlgorithm(val.title);
    };
    return (
        <div className="nav-dropdown">
            <button className="btn nav-dropdown-toggle" onClick={handleClick}>
                {val ? val : "Choose Algorithm"}
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                    {dropdownValues.map((val, i) => (
                        <li key={i} onClick={() => handleSetValue(val)}>
                            {val.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
