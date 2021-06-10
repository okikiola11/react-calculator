import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexDisplay = styled.section`
  background-color: #D1A7A0;
  height: 100px;
  font-weight: bold;
  font-size: 2rem;
  padding: 30px;
  color: #000000;
  text-align: right;
  border-radius: 3px;
`;

const displayCalculator = (props) => {
  const { result } = props;

  return (
    <FlexDisplay>
      <div className="display">
        <h1>{result}</h1>
        {/* <div> Display Result </div> */}
      </div>
    </FlexDisplay>
  );
};

displayCalculator.propTypes = {
  result: PropTypes.string,
};

displayCalculator.defaultProps = {
  result: '0',
};

export default displayCalculator;
