import React from 'react';
import CleanSingleJoke from '../CleanSingleJoke/CleanSingleJoke.js';

const JokeList = ({ cleanSingleJokes }) => {
  const cleanSingleJokeList = cleanSingleJokes.map(cleanSingleJoke => <CleanSingleJoke key={cleanSingleJoke.id} {...cleanSingleJoke} />)
  return(
    <div className="jokelist">
      {cleanSingleJokeList}
    </div>
  )
}

export default JokeList;
