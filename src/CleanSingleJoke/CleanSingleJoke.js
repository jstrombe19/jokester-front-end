import React from 'react';

const CleanSingleJoke = (props) => {
  return(
    <div className="joke">
      <h2>{props.category}</h2>
      <h4>{props.type}</h4>
      <h4>{props.joke}</h4>
    </div>
  )
}

export default CleanSingleJoke;
