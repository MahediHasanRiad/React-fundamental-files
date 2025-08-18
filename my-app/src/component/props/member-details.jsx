import React from "react";

const MemberInfo = props => (
    <div>
        {/* dynamic info  */}
      <h1>This is { props.name }</h1>
      <h4>Profession : { props.profession }</h4>
      <h4>Age: { props.age }</h4>
      <h4>Address: { props.address }</h4>
    </div>
);

export default MemberInfo;
