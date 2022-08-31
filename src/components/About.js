import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I'm a 28 year old junior developer looking for succsess and happieness for myself and the ones around me!</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
