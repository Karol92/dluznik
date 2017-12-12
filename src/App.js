import React, {Component} from 'react';
import './App.css';
import MiniDrawer from "./components/PersistentDrawer";






class App extends Component {
    render() {
        return (
            <div className="App">
                <MiniDrawer/>
            </div>

        );
    }
}

export default App;
