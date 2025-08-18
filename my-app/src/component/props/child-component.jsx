import React from "react";

const ChildComponent= (props) => (
  <div>
    <h1>This is Child Component</h1>
    <h2>I have no idea about this</h2>
    {props.children}
  </div>
);

const  ParentComponent = () => (
  <div>
    <h1>This is Parent component</h1>
    <h2>i don not know</h2>
    <ChildComponent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        rerum optio tempore
      </p>
    </ChildComponent>
  </div>
);

export default ParentComponent