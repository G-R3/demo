import React, { useEffect, useState, useRef } from "react";

export default function Grid() {
    const [numCols, setNumCols] = useState(0);
    const [numRows, setnumRows] = useState(0);
    const elementRef = useRef(null);
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
                    startNode: col === 0 && row === 12,
                    endNode: col === 29 && row === 29,
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
            console.log(evt.target.classList.toggle("wall"));
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleClick = (e, node) => {
        if (!node.startNode && !node.endNode) e.target.classList.toggle("wall");
    };

    useEffect(() => {
        setNumCols(elementRef.current.clientHeight / 20);
        setnumRows(elementRef.current.clientWidth / 20);
        console.log("rows:", numRows, "col: ", numCols);
        const initialGrid = getInitialGrid(numRows, numCols);
        setGrid(initialGrid);
    }, [numCols, numRows]);

    return (
        <div className="Grid" ref={elementRef}>
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
    );
}
