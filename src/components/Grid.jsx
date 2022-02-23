import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const startNodeRows = 19;
const startNodeCols = 9;
const endNodeRows = 20;
const endNodeCols = 9;

export default function Grid({ visualize }) {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [algorithm, setAlgorithm] = useState("");
    const [grid, setGrid] = useState([]);

    const getInitialGrid = (numRows = 50, numCols = 60) => {
        let initialGrid = [];

        for (let row = 0; row < numRows; row++) {
            let gridRow = [];
            for (let col = 0; col < numCols; col++) {
                gridRow.push({
                    row,
                    col,
                    startNode: row === startNodeRows && col === startNodeCols,
                    endNode: row === endNodeRows && col === endNodeCols,
                });
            }
            initialGrid.push(gridRow);
        }

        return initialGrid;
    };

    useEffect(() => {
        // this is hardcoded based on the values of the CSS height & weight properties of the Grid class.
        const initialGrid = getInitialGrid(720 / 20, 600 / 20);
        setGrid(initialGrid);
    }, []);

    const handleMouseDown = (node) => {
        setIsMouseDown(true);
    };
    const handleMouseEnter = (evt, node) => {
        if (isMouseDown) {
            evt.target.classList.toggle("wall");
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleClick = (e, node) => {
        if (!node.startNode && !node.endNode) e.target.classList.toggle("wall");
    };

    return (
        <>
            <Dropdown setAlgorithm={setAlgorithm} />
            <div className="Grid">
                {grid.map((row) => {
                    return row.map((node, i) => (
                        <div
                            key={i}
                            className={`node ${node.row}-${node.col} ${
                                node.startNode ? "start-node" : ""
                            } ${node.endNode ? "end-node" : ""}`}
                            onMouseDown={() => handleMouseDown(node)}
                            onMouseEnter={(e) => handleMouseEnter(e, node)}
                            onMouseUp={handleMouseUp}
                            onClick={(e) => handleClick(e, node)}
                        ></div>
                    ));
                })}
            </div>
        </>
    );
}
