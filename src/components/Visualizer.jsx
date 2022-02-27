import React from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";

export default function Visualizer() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="Grid-container">
                    <Grid gridName="first" />
                </div>
                <div className="Grid-container">
                    <Grid gridName="second" />
                </div>
            </main>
        </div>
    );
}
