import React from 'react';
import resume from '../../pdfs/resume.pdf';
import './index.scss';

const About = () => {

    const technologyList = [
        { id: 1, displayName: "UI Engineering" },
        { id: 2, displayName: "UI/UX- Web Development" },
        { id: 3, displayName: "AI & Machine Learning" },
        { id: 4, displayName: "S/W Development in Test" },
    ]

    return (
        <div className="about-page component-spacing" id="about">
            <div className="component-header"> About me </div>
            <div className="component-sub-header"> Who am i ? </div>
            <div className="details">
                <p>
                    Hi <strong>Fellas</strong>, I am a Senior Data Engineer at Walmart.
                    I recently finished my Post Graduation from Northeastern University.
                    I majored in Information systems and my GPA was 3.8. During my masters,
                    I interned at Dassault Systems for 6 month as R&D engineer with
                    Platform Server Team.
                </p>
                <p>
                    Before Post grad, I used to work at a startup RDV Trading as a Product Lead.
                    I have also worked at Accenture as Application Developer for about 3 years.
                    I am quite proficient in Python, SQL, React, Tableau, PowerBI,
                    Data Warehousing and Test Automation
                </p>
            </div>
            <div id="technologies-list" className="row">
                {
                    technologyList.map(({ displayName }, index) => {
                        return (
                            <div id="list"
                                className="col-lg-3 col-md-3"
                                key={index} data-aos="zoom-in">
                                <div id="list-div" className={`color-${index + 1}`}>
                                    {displayName}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="hire-me" data-aos="fade-left">
                <p>
                    I am happy to tell you that you have a
                    golden opportunity to hire the most awesome person!
                </p>
                <a href={resume}
                    download="resume.pdf"
                    id="download-cv">
                    Hire me
                </a>
            </div>
        </div>
    )
}
export default About;