import React from "react";

const Skill = (props) => (
  <div>
    <h1>Skill List: </h1>
    <div>
      <ul>
        {/* dynamic skill  */}
        <li>{props.skill1}</li>
        <li>{props.skill2}</li>
        <li>{props.skill3}</li>
      </ul>
    </div>
  </div>
);

export default Skill