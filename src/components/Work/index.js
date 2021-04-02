import React from 'react';
import './index.scss';

const Work = () => {
    const workList = [
        {
            id: 1,
            title: 'DATA ENGINEERING',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 2,
            title: 'MACHINE LEARNING',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry Lorem 
            Ipsum has been the industry's`
        },
        {
            id: 3,
            title: 'WEB DEVELOPMENT',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 4,
            title: 'CLOUD COMPUTING',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 5,
            title: 'BUSINESS INTELLIGENCE',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 6,
            title: 'TEST AUTOMATION',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        }
    ];

    return (
        <div className="work-page component-spacing" id="work">
            <div className="component-header"> WHAT I DO? </div>
            <div className="component-sub-header col-md-6 col-lg-6 p-0">
                here are some of my Work experience
            </div>
            <div className="work-content p-0 col-12">
                {
                    workList.map(({ title, description }, index) => {
                        return (
                            <div className="work-list-container col-md-4" key={index}>
                                <div className="work-list" data-aos="zoom-in">
                                    <div className={`title color-${index + 1}`}>
                                        {title}
                                    </div>
                                    <div className="description">
                                        {description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Work;