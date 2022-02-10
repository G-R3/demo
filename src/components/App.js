import "../styles/App.css";
import Dropdown from "./Dropdown";
import Grid from "./Grid";
function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <p className="nav-title">Visualizer</p>
                <button className="btn nav-button">Visualize</button>
            </nav>
            <main>
                <div>
                    <Dropdown />
                    <Grid />
                </div>
                <div>
                    <Dropdown />
                    <Grid />
                </div>
            </main>
        </div>
    );
}

export default App;
