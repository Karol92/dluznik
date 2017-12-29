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

//
// const List = props => (
//     <ul>
//         {
//             props.items.map((item, index, name) =>
//                 <div>
//                 <li key={index}>{item}{name}</li>
//                 </div>)
//         }
//     </ul>
// );
//
//
// export default class App extends Component {
//
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             term: '',
//             items: [],
//             names: ''
//         };
//     }
//
//     onChange = (event) => {
//         this.setState({ term: event.target.value });
//     };
//
//     onSubmit = (event) => {
//         event.preventDefault();
//         this.setState({
//             term: '',
//             items: [...this.state.items, this.state.term]
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <form className="App" onSubmit={this.onSubmit}>
//                     <input value={this.state.term} onChange={this.onChange} />
//                     <input value={this.state.names} onChange={this.onChange} />
//                     <button>Submit</button>
//                 </form>
//                 <List items={this.state.items} />
//             </div>
//         );
//     }
// }