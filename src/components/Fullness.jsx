import React from 'react';
import PropTypes from 'prop-types';

const Fullness = props => {
  return(
    <div className='Fullness stateDisplay'>
      <div>Fullness: {props.level}</div>
      <button onClick={props.onFeed}>Feed</button>
    </div>
  )
}

Fullness.propTypes ={
  level: PropTypes.number.isRequired,
  onFeed: PropTypes.func.isRequired
}

export default Fullness;
