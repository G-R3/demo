import React, { useState } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";

export default function Visualizer() {
    const [visualize, setVisualize] = useState(false);

    return (
        <div>
            <Navbar visualize={visualize} setVisualize={setVisualize} />
            <main>
                <div className="Grid-container">
                    <Grid visualize={visualize} />
                </div>
                <div className="Grid-container">
                    <Grid visualize={visualize} />
                </div>
            </main>
        </div>
    );
}
