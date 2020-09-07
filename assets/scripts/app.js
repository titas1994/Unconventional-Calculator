const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // array declarations
function getUserNumberInput() {
  return parseInt(usrInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
  const logEntry = {  // Declare Objects
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  logEntries.push(logEntry); // push elements into the array
  console.log(logEntries);
  console.log(logEntry.operation); // Accesing Object Data
  //console.log(logEntries[1]); // access specific index of the array element list
}


//Addition
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber; //same like "currentResult = currentResult + enteredNumber;"
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

//Subtraction
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //currentResult = currentResult - enteredNumber;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

//Multipication
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //currentResult = currentResult * enteredNumber;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

//Division
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //currentResult = currentResult / enteredNumber;
  currentResult /= enteredNumber; 
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVISION',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);