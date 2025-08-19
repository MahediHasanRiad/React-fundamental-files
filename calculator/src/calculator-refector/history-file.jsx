import React, { useState } from "react";
import Button from "./component/button";

const History = ({ histories }) => {
  const [show, setShow] = useState(true);

  const showItem = () => {
    // reverse
    setShow(!show);
  };

  return (
    <div>
      <h1>History: </h1>
      {histories.length == 0 ? (
        <p>There is no History</p>
      ) : (
        <ul>
          {histories.map((history) => (
            <li key={history.id}>
              <b> Operation: </b> {history.input.a} {history.operator}{" "}
              {history.input.b}
              <b> Result: </b> {history.result}
              {/* show / hide item  */}
              {show && (
                <>
                  <b> Date: </b>
                  {history.date} 
                  <Button text='Restore' onClick={()=>{}} />
                </>
              )}
              <Button text={show ? 'Hide' : 'Show'} onClick={showItem}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
