import React, { Component } from "react";
import "./About.css";
import profilepic from "../assets/profilepic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profilepic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elizabeth Cucuzzella</div>
            <div className="brief_description">
              I am a sophomore studying data science and mathematics with a concentration in environmental science at Tufts University in Boston. I am currently interning at TRC as a digital intern. In my free time, I love to read and listen to indie pop music.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
