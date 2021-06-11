import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './buttonPanel/ButtonPanel';
import calculate from '../logic/calculate';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
`;

const TextContent = styled.section`
  width: 400px;
`;

const Flex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  width: 700px;
  margin: auto;
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
  };

  const { total, next } = state;
  const result = next || total || '0';

  return (
    <>
      <Wrapper>
        <TextContent>
          <div>Let‘s do some Math!</div>
        </TextContent>
        <Flex>
          <DisplayCalculator result={result} />
          <ButtonPanel clickHandler={handleClick} />
        </Flex>
      </Wrapper>
    </>
  );
};

export default App;
