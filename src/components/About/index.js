import React from 'react';
import profileImg from "../../images/profile-photo.jpg";
import './index.scss';

const About = () => {
    return (
        <section className={`about-page component-spacing`} id="about">
            <div className="component-header"> About me </div>
            <div className="component-sub-header"> Who am i ? </div>
            <div className="d-flex about-us-container">
                <div className="profile-photo">
                    <img src={profileImg} alt="profile-img" />
                </div>
                <div className="details">
                    <h1> Rohit Khatu </h1>
                    <p>
                        Hi <strong>Fellas</strong>, I am a Graduate Student at Northeastern University.
                        I'm pursuing my Masters in Data Analytics and my current GPA is 3.93. During my masters,
                        I interned at Dtonomy Inc for 6 months as Machine Learning Software Engineer.
                    </p>
                    <p>
                        Before Post grad, I was working as a Associate Consultant(DevOps Developer) in a company named Mindcraft Software 
                        and was responsible for Devlopment, Deployment and Testing of software for clients like UOB, Singapore and Fullerton, India.
                        I posses professional work experince of 1 year and 6 months.
                        I am quite proficient in Python, SQL, R, Javascript, Tableau, PowerBI, SDLC, Machine Learning, Data Analysis,
                        Statistics, Data Warehousing and Test Automation.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;