import React from "react";
import ListEntry from "./ListEntry.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.addToArray = this.addToArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addClickEvent = this.addClickEvent.bind(this);
    this.state = {
      string: "a",
      array: ["a"]
    };
  }

  addToArray(e) {
    this.setState({
      string: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //treat this.state as if it was immutable
    this.setState({
      string: "",
      array: this.state.array.concat(this.state.string)
      //concat returns a new array
      //https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
      //ES6 way: array: [...this.state.array, this.state.string]
    });
    document.getElementById("myForm").reset();
  }

  addClickEvent(e) {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <div>
        Hello from List <br />
        <form id="myForm">
          Add to Array: <input name="array" onChange={this.addToArray} /> <br />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
        This is String: {this.state.string} <br />
        This is Array: {this.state.array} <br />
        {this.state.array.map(element => (
          <ListEntry listItem={element} click={this.addClickEvent} />
        ))}
      </div>
    );
  }
}

export default List;