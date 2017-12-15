import React, {Component} from 'react';
import './App.css';
import MiniDrawer from "./components/PersistentDrawer";
import LabelBottomNavigation from "./components/Footer";
// import ListExampleMessages from "./components/Test";


class App extends Component {
    render() {
        return (
            <div className="App">
                <MiniDrawer/>
                <LabelBottomNavigation/>
                {/*<ListExampleMessages/>*/}
            </div>

        );
    }
}

export default App;
