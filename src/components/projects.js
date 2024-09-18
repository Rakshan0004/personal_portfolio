import React from "react";
import "../styles.css";
import blockchain from "../assets/blockchain.png";
import ecommerce from "../assets/ecommerce.webp";

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="section-title">Projects</h1>
            <div className="project-items">
                <div className="project-container">
                    <img src={blockchain} alt="E-Voting Based on Blockchain Technology" className="project-img" />
                    <br />
                    E-Voting Based on Blockchain Technology
                    <br />
                    <a href="https://github.com/Rakshan0004/BlockChain-Dapp" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View Project</button>
                    </a>
                </div>
                <div className="project-container">
                    <img src={ecommerce} alt="E-Commerce Website" className="project-img" />
                    <br />
                    E-Commerce Website
                    <br />
                    <a href="https://github.com/Rakshan0004/ECOM_FRONTEND.git" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View Project</button>
                    </a>
                </div>
            </div>
            <a href="https://github.com/Rakshan0004?tab=repositories" target="_blank" rel="noreferrer" className="prj-link">
                <button className="prj-more-btn">View More</button>
            </a>
        </section>
    );
}

export default Projects;
