import React from "react";
import ListEntry from "./ListEntry.jsx"
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            str: '',
            array: []
        }
        this.enterInput = this.enterInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addClickEvent = this.addClickEvent.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    enterInput(e){
        this.setState({
         str: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            array: [...this.state.array, this.state.str],
        })
        document.getElementById('myForm').reset();
    }

addClickEvent(e){
    alert('You clicked meee!!!');
}

handleEdit(index){
    var todos = this.state.array.slice();
    var newTodo = prompt('Edit', todos[index]);
    todos[index] = newTodo;
    this.setState({
        array:todos
    });
}

handleDelete(index){
    let todos = this.state.array.slice();
    todos.splice(index, 1);
    this.setState({
        array: todos
    })
}

    render(){
        return (
            <div>
                Hello from List Component
                <form id='myForm'>
                <br/> Add to Array:<input type='text' name='addToArray' onChange={this.enterInput}/>
                <input type='submit' value='submit' onClick={this.handleSubmit}/>
                </form>
                {/* {this.state.str} */}
                <br/>
                {this.state.array.map((element, i) => (<ListEntry key={i} i={i}click={this.addClickEvent} listItem={element} delete={this.handleDelete} edit={this.handleEdit}/>))}
            </div>
        )
    }
}

export default List