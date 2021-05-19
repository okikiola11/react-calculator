const Calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
  //const operations = ['+', '/', '*', '-'];
  
  if (buttonName == "+/-") {
    total *= -1
    next *= -1 
  }
  
  console.log(total *= -1)
}

Calculate({total: 3, next: 5, operation: '+/-'})