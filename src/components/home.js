import React from "react";
import "../styles.css";
import rakshanimg from "../assets/rakshan.jpg";
import resumeimg from "../assets/resume.png"
import resume from "../assets/resume.pdf"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
      <section id="home">
        <div className="home-content">
            <div className="hello"><span className="hello-2">Hello,</span></div>
            <div className="intro-text"><span className="intro-2">I'm Rakshan</span></div>
            <div className="intro-para"><p className="intro-para-2">I aspire to work with </p></div>
            <div className="intro-caption"><span className="intro-2"><Typewriter options={{strings: ['Web Development', 'Machine Learning', 'Application Devlopment', 'Blockchain'], autoStart: true, loop: true}} /></span></div>
            <a href = {resume} target = "_blank" rel="noreferrer"><button className="resume-btn"><img src={resumeimg} alt="Resume" className="resume-btn-img"/>Resume</button></a>
        </div>
        <img src={rakshanimg} alt="Rakshan" className="home-img" />
      </section>
    );
  }
  
  export default Home;