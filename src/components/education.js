import React from "react";
import "../styles.css";
import degreeimg from "../assets/degree.png";

const Education = () => {
    return (
        <section id="education">
            <h1 className="section-title">Education</h1>
            <div className="edu-container">
                <img src={degreeimg} alt="degree" className="" />
                <h3>B. Tech. Bachelor's Degree</h3>
                <h4 style={{color: "grey", fontWeight: 500}}>Electronics and Communication Engineering</h4>
                <h4 style={{color: "grey", fontWeight: 500}}>Vellore Institute of Technology</h4>
            </div>
        </section>
    );
    }

    export default Education;