import React, { useState } from 'react';
import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     total: null,
  //     next: null,
  //     operation: null,
  //   };
  // }

  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  })

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const result = next || total || '0';

    return (
      <>
        <DisplayCalculator result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
