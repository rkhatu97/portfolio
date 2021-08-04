import React from 'react';
import img1 from "../../images/artificial-intelligence.webp";
import img2 from "../../images/data-analytics.jpg";
import img3 from "../../images/deep_learning.jpg";
import img4 from "../../images/OCR.jpg";
import img5 from "../../images/Housing_sales.PNG";
import './index.scss';

const Work = () => {
    const workList = [
        {
            id: 1,
            imgUrl: img5,
            title: 'Housing Sales Analysis',
            description: `Imported the dataset to leverage the power of tableau to perform data analysis and data visualization 
                        by building and deploying dashboard using  line charts, pie charts and bar plots to show 
                        difference in sales prices based on year built, heating amenity and roof and house structure.
                        Helps in investing in house which gives maximum ROI.  `
        },
        {
            id: 2,
            imgUrl: img4,
            title: 'OCR',
            description: `Developed an OCR application with help of python packages; Tkinter, OpenCV, and PyTesseract. Application has
            capability to crop, resize, rotate, and invert image with accurate text extraction from image.`
        },
        {
            id: 3,
            imgUrl: img3,
            title: 'WEB Scrapping',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 4,
            imgUrl: img2,
            title: 'CLOUD COMPUTING',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 5,
            imgUrl: img3,
            title: 'BUSINESS INTELLIGENCE',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        },
        {
            id: 6,
            imgUrl: img1,
            title: 'TEST AUTOMATION',
            description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`
        }
    ];

    return (
        <section className="work-page component-spacing" id="work">
            <div className="component-header"> WHAT I DO? </div>
            <div className="component-sub-header col-md-6 col-lg-6 p-0">
                Here are some of my Projects
            </div>
            <div className="work-content p-0 col-12">
                {
                    workList.map(({ title, description, imgUrl }, index) => {
                        return (
                            <div key={index}
                                className="work-list-container col-sm-12 col-md-6 col-lg-4">
                                <div className="work-list" data-aos="zoom-in">
                                    <img src={imgUrl} alt="work" />
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
        </section>
    )
}
export default Work;