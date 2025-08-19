import React from "react";

const History = ({histories}) => (
  <div>
    <h1>History: </h1>
    {histories.length == 0 ? (
      <p>There is no History</p>
    ) : (
      <ul>
        {histories.map((history) => (
          <li key={history.id}>
            <b> Operation: </b> {history.input.a} {history.operator} {history.input.b}
            <b> Result: </b> {history.result}
            <b> Date: </b> {history.date}
            <button>Restore</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default History;