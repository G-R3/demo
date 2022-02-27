import React, { useState, useEffect, useRef } from "react";
import Subnav from "./Subnav";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";

const startNodeRows = 2;
const startNodeCols = 10;
const endNodeRows = 47;
const endNodeCols = 10;

export default function Grid({ gridName }) {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [algorithm, setAlgorithm] = useState("");
    const [grid, setGrid] = useState([]);

    const getInitialGrid = (numRows = 50, numCols = 20) => {
        let initialGrid = [];

        for (let row = 0; row < numRows; row++) {
            let gridRow = [];
            for (let col = 0; col < numCols; col++) {
                gridRow.push({
                    row,
                    col,
                    startNode: row === startNodeRows && col === startNodeCols,
                    endNode: row === endNodeRows && col === endNodeCols,
                    previousNode: null,
                    distance: Infinity,
                    isWall: false,
                    isVisisted: false,
                });
            }
            initialGrid.push(gridRow);
        }

        return initialGrid;
    };

    useEffect(() => {
        // this is hardcoded based on the values of the CSS height & weight properties of the Grid class.
        // const initialGrid = getInitialGrid(720 / 20, 600 / 20);
        const initialGrid = getInitialGrid(50, 20);

        setGrid(initialGrid);
    }, []);

    const handleMouseDown = (node) => {
        setIsMouseDown(true);
    };
    const handleMouseEnter = (evt, node) => {
        if (isMouseDown) {
            evt.target.classList.toggle("wall");
            node.isWall = true;
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleClick = (e, node) => {
        if (!node.startNode && !node.endNode) e.target.classList.toggle("wall");
    };

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(
                    `${gridName}-${node.row}-${node.col}`,
                ).className = "node node-shortest-path";
            }, 50 * i);
        }
    };

    const animate = (visitedNodesInOrder, nodesInShortestPath) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPath);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(
                    `${gridName}-${node.row}-${node.col}`,
                ).className = "node node-visited";
            }, 10 * i);
        }
    };

    const visualizeAlgorithm = () => {
        const startNode = grid[startNodeRows][startNodeCols];
        const endNode = grid[endNodeRows][endNodeCols];
        const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
        const nodesInShortestPath = getNodesInShortestPathOrder(endNode);

        animate(visitedNodesInOrder, nodesInShortestPath);
    };

    return (
        <>
            <Subnav
                setAlgorithm={setAlgorithm}
                visualize={visualizeAlgorithm}
            />
            <div className="Grid">
                {grid.map((row, i) => {
                    return (
                        <div key={i}>
                            {row.map((node, i) => {
                                const classes = node.startNode
                                    ? "start-node"
                                    : node.endNode
                                    ? "end-node"
                                    : node.isWall
                                    ? "wall"
                                    : "";

                                return (
                                    <div
                                        key={i}
                                        className={`node ${classes}`}
                                        id={`${gridName}-${node.row}-${node.col}`}
                                        onMouseDown={() =>
                                            handleMouseDown(node)
                                        }
                                        onMouseEnter={(e) =>
                                            handleMouseEnter(e, node)
                                        }
                                        onMouseUp={handleMouseUp}
                                        onClick={(e) => handleClick(e, node)}
                                    ></div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
