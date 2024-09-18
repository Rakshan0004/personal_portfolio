import '../styles.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lye51d1', 'template_wjbwf2o', form.current, '7PfPCTSnd4gZ-Mgkk')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    window.scrollTo(0, 0); // Scroll to the top of the page
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact">
            <h1 className="section-title">Contact</h1>
            <span className="contact-text">Let’s chat! Fill out the form below to start a conversation about exciting opportunities.</span>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_name">Name</label>
                <input type="text" id="user_name" name="user_name" />
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name="user_email" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                <input type="submit" value="Send" />
            </form>
            <div className="links">
                <a href="https://www.linkedin.com/in/rakshan-chintala-08965521a/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" className="link" />
                </a>
                <a href="https://github.com/Rakshan0004/" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className="link" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
