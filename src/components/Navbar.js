import React from "react";

export default function Navbar({ visualize, setVisualize }) {
    return (
        <nav className="navbar">
            <p className="nav-title">Visualizer</p>
            <button
                className="btn nav-button"
                onClick={() => setVisualize(!visualize)}
            >
                Visualize
            </button>
        </nav>
    );
}
