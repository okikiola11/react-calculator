import PropTypes from 'prop-types';
import Button from './Button';

const DisplayCalculator = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <h1>{result}</h1>
      <div> Show Components </div>
      <Button />
    </div>
  );
};

DisplayCalculator.propTypes = {
  result: PropTypes.string,
};

DisplayCalculator.defaultProps = {
  result: '0',
};

export default DisplayCalculator;
