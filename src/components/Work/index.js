import React, { useState } from "react";
import img4 from "../../images/OCR.jpg";
import img5 from "../../images/Housing_sales.PNG";
import img2 from "../../images/data-analytics.jpg";
import img3 from "../../images/face_recognition.jpg";
import img1 from "../../images/artificial-intelligence.webp";
import "./index.scss";

const Work = () => {
  const [workList, setWorkList] = useState([
    {
      id: 1,
      imgUrl: img5,
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      title: "Housing Sales Analysis",
      description: `Imported the dataset to leverage the power of tableau to perform data analysis and data visualization 
                        by building and deploying dashboard using  line charts, pie charts and bar plots to show 
                        difference in sales prices based on year built, heating amenity and roof and house structure.
                        Helps in investing in house which gives maximum ROI.  `,
    },
    {
      id: 2,
      imgUrl: img4,
      title: "OCR",
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      description: `Developed an OCR application with help of python packages; Tkinter, OpenCV, and PyTesseract. Application has
            capability to crop, resize, rotate, and invert image with accurate text extraction from image.`,
    },
    {
      id: 3,
      imgUrl: img3,
      title: "WEB Scrapping",
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      description: `Developed a Program in python to perform webscarpping using beautiful soup 
                        on flipkart shopping site for mobile devices. Created dataframe of extracted data and exported it to CSV.`,
    },
    {
      id: 4,
      imgUrl: img3,
      title: "Face Recognition",
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      description: `  Developed a python program using OpenCV to generate train and test dataset of facial images.
                            Rendered a neural network model by using VGG16 transfer learning technique, keras and TensorFlow for feature extraction from images. Performed  hyperparameter tunning and saved model in h5 format.
                        	Imported the model, provided external IP webcam support to use external devices for effective face recognition.
            `,
    },
    {
      id: 5,
      imgUrl: img2,
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      title: "Time Series Analysis on ADA stock",
      description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`,
    },
    {
      id: 6,
      imgUrl: img1,
      showFullDescription: false,
      duration: "Nov 2019 - Dec 2021",
      title: "Health Insurance Cross Sell Prediction",
      description: `What is Lorem Ipsum Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry Lorem 
                Ipsum has been the industry's`,
    },
  ]);

  function onViewMore(data) {
    const res = workList.map((value, index) => {
      if(parseInt(value.id) === parseInt(data.id)) {
        value.showFullDescription = !value.showFullDescription;
        return value;
      }
      return value
    });
    setWorkList(res);
  }

  return (
    <section className="work-page component-spacing" id="work">
      <div className="component-header"> WHAT I DO? </div>
      <div className="component-sub-header col-md-6 col-lg-6 p-0">
        Here are some of my Projects
      </div>
      <div className="timeline">
        {workList.map((value, index) => {
          const { 
              imgUrl, 
              title, 
              duration, 
              description, 
              showFullDescription } = value;
          const containerClass = index % 2 === 0 ? "left" : "right";
          const descriptionClass = showFullDescription 
            ? "view-full-description" : "";

          return (
            <div className={`container ${containerClass}`} key={index}>
              <div className="content" data-aos="zoom-in"> 
                <img src={imgUrl} alt="timeline-png" />
                <h4> {title} </h4>
                <div> 
                  <div className={`description ${descriptionClass}`}> 
                    {description}  
                  </div>
                  <div className="view-more" 
                      onClick={_ => onViewMore(value)}> 
                      {showFullDescription ? "View less" : "View more"}
                  </div>
                </div>
                <div id="duration"> {duration} </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Work;
