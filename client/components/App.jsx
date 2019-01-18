import React from "react";
import List from "./list.jsx"; 

// const App = (props) => <div>Hello from Component{props.firstName}{props.lastName}!</div>

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first: '',
            last: ''
        }
        this.enterFirst = this.enterFirst.bind(this);
        this.enterLast = this.enterLast.bind(this);
    }

    enterFirst(e){
        this.setState({
            first: e.target.value,
        })
    }
    enterLast(e){
        this.setState({
            last: e.target.value
        })
    }

    render(){
    
        
            return(
                <div>helloooo from App component!! 
                    <br/>First: <input type='text' name='first' onChange={this.enterFirst}/>
                    <br/>Last:<input type='text' name='last' onChange={this.enterLast}/>
                    <br/>{this.state.first}
                    <br/>{this.state.last}
                    <br/>  <List />
                </div>
            )
        }
    
}


export default App;