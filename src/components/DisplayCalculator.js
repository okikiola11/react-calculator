import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexDisplay = styled.section`
  background-color: gray;
  height: 100px;
  font-weight: bold;
  font-size: 2rem;
  padding: 30px;
  color: #ffffff;
  text-align: right;
  border-radius: 3px;
`;

const DisplayCalculator = (props) => {
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

DisplayCalculator.propTypes = {
  result: PropTypes.string,
};

DisplayCalculator.defaultProps = {
  result: '0',
};

export default DisplayCalculator;
