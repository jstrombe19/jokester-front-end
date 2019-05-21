import React from 'react';
import './App.css';
import JokeList from './JokeList/JokeList.js';
import JokeForm from './JokeForm/JokeForm.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dirtyJokes: {
        single: [],
        double: []
      },
      cleanJokes: {
        single: [{
          category: "Black Adder",
          id: 1,
          type: "single",
          joke: "My dog has no nose. \n How does he smell? \n Awful!"
        }],
        double: []
      }
    }
  }

  // async componentDidMount() {
  //   const singleCleanResponse = await fetch('URLGOESHERE');
  //   const singleCleanJokes = await singleCleanResponse.json();
  //   this.setState({ cleanJokes.single: singleCleanJokes });
  //   const doubleCleanResponse = await fetch('URLGOESHERE');
  //   const doubleCleanJokes = await doubleCleanResponse.json();
  //   this.setState({ cleanJokes.double: doubleCleanJokes });
  //
  //   const singleDirtyResponse = await fetch('URLGOESHERE');
  //   const singleDirtyJokes = await singleDirtyResponse.json();
  //   this.setState({ dirtyJokes.single: singleDirtyJokes });
  //   const doubleDirtyResponse = await fetch('URLGOESHERE');
  //   const doubleDirtyJokes = await doubleDirtyResponse.json();
  //   this.setState({ dirtyJokes.double: doubleDirtyJokes });
  //
  // }

  addNewCleanSingleJoke = cleanSingleJoke => {
    const { single } = this.state.cleanJokes;
    const newCleanSingleJoke = { ...cleanSingleJoke, id: Date.now() };
    const cleanSingleJokeList = [...single, newCleanSingleJoke];
    this.setState({
      cleanJokes: {
        single: cleanSingleJokeList
      }
    });
  }

  render() {
    const { single } = this.state.cleanJokes;
    return (
      <div>
        <header className='header'>
        <div>
            <img src='https://cdn1.iconfinder.com/data/icons/celebration-party-11/64/clown-funny-party-circus-joker-128.png' alt='' />
            <h1>Jokester</h1>
            <button className='all-jokes-button'>Tell Me a Joke</button>
          </div>

        </header>
        <div className="App row">
          <div className="column">
            <JokeForm addNewCleanSingleJoke={this.addNewCleanSingleJoke} />
          </div>
          
          <div className='column'>
            <button className='all-jokes-button'>All Jokes</button>
          </div>

        </div>
        <div className='joke-list'>
          <JokeList cleanSingleJokes={single} />
        </div>
      </div>
    );
  }
}


export default App;
