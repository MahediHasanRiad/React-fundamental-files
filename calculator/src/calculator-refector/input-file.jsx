import React from "react";
import Input from "./component/input";

const AllInputs = ({result, inputValue, inputHandler}) => (
    <div>
        <h1>Result: {result}</h1>
        <Input
          type="number"
          name="a"
          value={inputValue.a}
          onChange={inputHandler}
        />
        <Input
          type="number"
          name="b"
          value={inputValue.b}
          onChange={inputHandler}
        />
    </div>
)

export default AllInputs;