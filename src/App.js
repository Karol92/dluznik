import React, {Component} from 'react';
import './App.css';
import MiniDrawer from "./components/PersistentDrawer";
import Footer from "./components/Footer";



class App extends Component {
    render() {
        return (
            <div className="App">
                <MiniDrawer/>
                {/*<NestedList/>*/}
                <Footer/>
            </div>

        );
    }
}

export default App;
