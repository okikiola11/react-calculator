import React from 'react';
import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(() => ({ ...result }));
    console.log(this.setState(() => ({ ...result })));
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <DisplayCalculator result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
