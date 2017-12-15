import React, {Component} from 'react';
import './App.css';
import MiniDrawer from "./components/PersistentDrawer";
import LabelBottomNavigation from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MiniDrawer/>
                <LabelBottomNavigation/>
            </div>

        );
    }
}

export default App;
