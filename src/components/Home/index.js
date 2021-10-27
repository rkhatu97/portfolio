import React from 'react';
import resume from '../../pdfs/Resume(Rohit Khatu).pdf';
import './index.scss';

const Home = () => {
    return (
        <section className="home-page" id="home">
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 id="title" data-aos="fade-up">
                    Hi!
                    <br />
                    I'm Rohit
                </h1>
                <p id="sub-title" data-aos="fade-up">
                    Graduate Student 
                </p>
                <p id="sub-title" data-aos="fade-up">
                    at Northeastern University
                </p>
                <a href={resume}
                    id="download-cv"
                    data-aos="fade-up"
                    download="Resume(Rohit Khatu).pdf">
                    Download CV
                </a>
            </div>
        </section>
    )
}

export default Home;