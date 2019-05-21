import React, {Component} from 'react';

export default class JokeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
      id: Date.now(),
      type: "single",
      joke: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewCleanSingleJoke(this.state);
    this.setState({
      category: "",
      id: Date.now(),
      type: "single",
      joke: ""
    });
  }

  render() {
    return(
      <form className="newjokeform" onSubmit={this.handleSubmit}>
        <input name="category" value={this.state.category} onChange={this.handleChange} placeholder="Enter joke category"/>
        <br/>
        <input name="joke" value={this.state.joke} onChange={this.handleChange} placeholder="Enter joke"/>
        <br/>
        <button>Add New Joke</button>
      </form>
    )
  }
}
