import React, { useState } from "react";

export default function Dropdown() {
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

    return (
        <div className="nav-dropdown">
            <button
                className="btn nav-dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                {val ? val : "Choose Algorithm"}
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                    {dropdownValues.map((val, i) => (
                        <li key={i} onClick={() => setVal(val.title)}>
                            {val.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
