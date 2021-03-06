import React from 'react';
import PropTypes from 'prop-types';

const Weight = props => {
  return(
    <div className='Weight stateDisplay'>
      <div>Weight: {props.level}</div>
    </div>
  )
}

Weight.propTypes ={
  level: PropTypes.number.isRequired,
}

export default Weight;
