import React from "react";
import "../styles.css";
import c from "../assets/java.png"
import python from "../assets/python.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import solidity from "../assets/solidity.png"
import nodejs from "../assets/nodejs.png"
import reactjs from "../assets/reactjs.png"
import expressjs from "../assets/docker.png"
import flask from "../assets/springboot.png"
import mysql from "../assets/mysql.png"
// import mongodb from "../assets/mongodb.png"

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skill-items">
                <div className="skill-container"><img src={c} alt="c" className="skill-img" /><br />JAVA</div>
                <div className="skill-container"><img src={python} alt="python" className="skill-img" /><br />Python</div>
                <div className="skill-container"><img src={javascript} alt="javascript" className="skill-img" /><br />JavaScript</div>
                <div className="skill-container"><img src={html} alt="html" className="skill-img" /><br />HTML</div>
                <div className="skill-container"><img src={css} alt="css" className="skill-img" /><br />CSS</div>
                <div className="skill-container"><img src={solidity} alt="solidity" className="skill-img" /><br />Solidity</div>
                <div className="skill-container"><img src={nodejs} alt="nodejs" className="skill-img" /><br />Node JS</div>
                <div className="skill-container"><img src={reactjs} alt="reactjs" className="skill-img" /><br />React JS</div>
                <div className="skill-container"><img src={expressjs} alt="expressjs" className="skill-img" /><br />Docker</div>
                <div className="skill-container"><img src={flask} alt="flask" className="skill-img" /><br />Spring-Boot</div>
                <div className="skill-container"><img src={mysql} alt="mysql" className="skill-img" /><br />MySQL</div>
                {/* <div className="skill-container"><img src={mongodb} alt="mongodb" className="skill-img" /><br />MongoDB</div> */}
            </div>
        </section>
    );
    }

    export default Skills;