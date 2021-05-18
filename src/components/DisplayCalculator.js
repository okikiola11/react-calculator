import PropTypes from 'prop-types';

const DisplayCalculator = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <h1>{result}</h1>
      <div> Display Result </div>
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
