import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Compnent {
  constructor() {
    super()
    
    this.state = {
      total: null,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName)
    this.setState(result);
  }

  render() {
    return (
      <>
        <DisplayCalculator result={result} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    )
  }
};

export default App;
