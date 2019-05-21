import React from 'react';

const CleanSingleJoke = ({ category, type, joke }) => {
  return(
    <div className="joke">
      <h2>{category}</h2>
      <h4>{type}</h4>
      <h4>{joke}</h4>
    </div>
  )
}

export default CleanSingleJoke;
