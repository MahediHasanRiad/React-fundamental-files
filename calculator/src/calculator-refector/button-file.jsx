import React from "react";
import Button from "./component/button";

const AllButtons = ({operatorHandler, clearFunc}) => {
  return (
    <div>
      <Button onClick={() => operatorHandler("+")} text="+" />
      <Button onClick={() => operatorHandler("-")} text="-" />
      <Button onClick={() => operatorHandler("*")} text="*" />
      <Button onClick={() => operatorHandler("/")} text="/" />
      <Button onClick={() => operatorHandler("%")} text="%" />
      <Button onClick={clearFunc} text="clear" />
    </div>
  );
};

export default AllButtons;
