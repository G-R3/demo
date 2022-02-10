import React, { useEffect, useState } from "react";

export default function Grid() {
    const [grid, setGrid] = useState([]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const getInitialGrid = (numRows = 30, numCols = 30) => {
        let initialGrid = [];

        for (let row = 0; row < numRows; row++) {
            let gridRow = [];
            for (let col = 0; col < numCols; col++) {
                gridRow.push({
                    row,
                    col,
                });
            }
            initialGrid.push(gridRow);
        }

        return initialGrid;
    };

    const handleMouseDown = (node) => {
        setIsMouseDown(true);
    };
    const handleMouseEnter = (evt, node) => {
        if (isMouseDown) {
            console.log("create wall", node);
            console.log(evt.target.classList.toggle("wall"));
        }
    };

    const handleMouseUp = () => {
        console.log("mouse is up");
        setIsMouseDown(false);
    };

    const handleClick = (e, node) => {
        e.target.classList.toggle("wall");
    };

    useEffect(() => {
        const initialGrid = getInitialGrid();
        setGrid(initialGrid);
    }, []);

    return (
        <div className="Grid">
            {grid.map((row) => {
                return row.map((node, i) => (
                    <div
                        key={i}
                        className="node"
                        onMouseDown={() => handleMouseDown(node)}
                        onMouseEnter={(e) => handleMouseEnter(e, node)}
                        onMouseUp={handleMouseUp}
                        onClick={(e) => handleClick(e, node)}
                    ></div>
                ));
            })}
        </div>
    );
}
