const DisplayCalculator = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <h1>{result}</h1>
      <div> Show Components </div>
    </div>
  );
};

export default DisplayCalculator;
