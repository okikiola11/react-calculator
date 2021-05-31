import React from 'react';
import PropTypes from 'prop-types';

const displayCalculator = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <h1>{result}</h1>
      {/* <div> Display Result </div> */}
    </div>
  );
};

displayCalculator.propTypes = {
  result: PropTypes.string,
};

displayCalculator.defaultProps = {
  result: '0',
};

export default displayCalculator;
