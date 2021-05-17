const ButtonPanel = () => (
  <main>
    <div>
      <button name="symbolReset" type="submit"> AC </button>
      <button name="symbolCalc" type="submit"> +/- </button>
      <button name="symbolModulo" type="submit"> % </button>
      <button name="symbolDiv" type="submit"> ÷ </button>
    </div>

    <div>
      <button name="number7" type="submit"> 7 </button>
      <button name="number8" type="submit"> 8 </button>
      <button name="number9" type="submit"> 9 </button>
      <button name="symbolMul" type="submit"> X </button>
    </div>

    <div>
      <button name="number4" type="submit"> 4 </button>
      <button name="number5" type="submit"> 5 </button>
      <button name="number6" type="submit"> 6 </button>
      <button name="symbolSubt" type="submit"> - </button>
    </div>

    <div>
      <button name="number1" type="submit"> 1 </button>
      <button name="number2" type="submit"> 2 </button>
      <button name="number3" type="submit"> 3 </button>
      <button name="symbolAdd" type="submit"> + </button>
    </div>

    <div>
      <button name="number0" type="submit"> 0 </button>
      <button name="symbolDec" type="submit"> . </button>
      <button name="symbolEquals" type="submit"> = </button>
    </div>
  </main>
);

export default ButtonPanel;
