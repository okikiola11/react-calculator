import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Flex = styled.section`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  border: 1px solid black;
  width: 700px;
`;

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(state, buttonName);
    setState(result);
    console.log(setState);
  };

  const { total, next } = state;
  const result = next || total || '0';

  return (
    <>
      <Flex>
        <DisplayCalculator result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </Flex>
    </>
  );
};

export default App;
