import React, { Component } from "react";
import Skills from "./skill";
import Social from "./social";
import "./profile.style.css";

class Profile extends Component {
  render() {
    const name = "Mahedi Hasan Riad";
    const profession = "Full stack developer, JavaScript / React / TypeScript";

    return (
      <div class="container">
        <h1>{name}</h1>
        <h3>{profession}</h3>
        <Skills />
        <Social />
      </div>
    );
  }
}

export default Profile;
