import React, { useState } from "react";
import AppCss from "./app.module.css";
import shortid from "shortid";
import AllButtons from "./button-file";
import History from "./history-file";
import AllInputs from "./input-file";

const App = () => {
  const initialValue = {
    a: 20,
    b: 10,
  };
  const [inputValue, setInputValue] = useState({ ...initialValue });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  // input handler
  const inputHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  // operator
  const operatorHandler = (operator) => {
    const f = new Function(
      "operator",
      `return ${inputValue.a} ${operator} ${inputValue.b}`
    );
    const result = f(operator);
    // set Result
    setResult(result);

    // history operator
    const historyValue = {
      id: shortid.generate(),
      input: inputValue,
      result,
      operator,
      date: new Date().toLocaleDateString(),
    };
    setHistories([historyValue, ...histories]);
   
  };

  

  // clear function
  const clearFunc = () => {
    setInputValue({ ...initialValue });
    setResult(0);
  };

  return (
    <div className={AppCss.body}>
      {/* input section  */}
      <AllInputs result={result} inputHandler={inputHandler} inputValue={inputValue} />

      {/* button section  */}
      <AllButtons operatorHandler={operatorHandler} clearFunc={clearFunc} />

      {/* history section  */}
      <History histories={histories}/>
    </div>
  );
};

export default App;
