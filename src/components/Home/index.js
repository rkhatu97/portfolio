import React from 'react';
import resume from '../../pdfs/resume.pdf';
import './index.scss';

const Home = () => {
    return (
        <div className="home-page" id="home">
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 id="title" data-aos="fade-up">
                    Hi!
                    <br />
                    I'm Rohit
                </h1>
                <p id="sub-title" data-aos="fade-up">
                    I am a Data Scientist at Walmart
                </p>
                <a href={resume}
                    id="download-cv"
                    data-aos="fade-up"
                    download="resume.pdf">
                    Download cv
                </a>
            </div>
        </div>
    )
}

export default Home;