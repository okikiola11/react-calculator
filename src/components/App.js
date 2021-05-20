import DisplayCalculator from './DisplayCalculator';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => (
  <div className="App">
    <>
      <DisplayCalculator />
      <ButtonPanel />
      <Calculate />
    </>
  </div>
);

export default App;
