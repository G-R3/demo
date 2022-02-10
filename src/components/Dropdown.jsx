import React, { useState } from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="nav-dropdown">
            <button
                className="btn nav-dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                Choose Alogirthm
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                    <li>Algorithm 1</li>
                    <li>Algorithm 2</li>
                    <li>Algorithm 3</li>
                </ul>
            )}
        </div>
    );
}
