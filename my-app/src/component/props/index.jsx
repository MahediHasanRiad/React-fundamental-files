import React, { Component } from "react";
import MemberInfo from "./member-details";
import Skill from "./props-skills";
import ParentComponent from "./child-component";

class Props extends Component {
  // dynamic info
  info = {
    name: "shamim",
    profession: "software engineer",
    age: 26,
    address: "Dhaka",
  };

  //   dynamic skill
  //   skill = {
  //     skill1: "Java",
  //     skill2: "Python",
  //     skill3: "JavaScript",
  //   };

  render() {
    return (
      <div>
        <h1>this is propst</h1>
        {/* dynamic system-1 props  */}
        <MemberInfo
          name={this.info.name}
          profession={this.info.profession}
          age={this.info.age}
          address={this.info.address}
        />
        {/* dynamic system-2  */}
        <Skill skill1="Java" skill2="Python" skill3="JavaScript" />


        {/* child component */}
        <ParentComponent />
      </div>

      //
    );
  }
}

export default Props;
