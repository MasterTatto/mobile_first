import './App.css';
import Routers from "./routers";
import Header from "./screen/header";

function App() {
    return (
        <div className="app">
            <Header/>
            <Routers/>
        </div>
    );
}

export default App;
