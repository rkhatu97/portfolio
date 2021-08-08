import React, { useState } from "react";
import img4 from "../../images/OCR.jpg";
import img5 from "../../images/Housing_sales.PNG";
import img2 from "../../images/data-analytics.jpg";
import img3 from "../../images/face_recognition.jpg";
import img1 from "../../images/insurance.jpg";
import img6 from "../../images/web_scrapping.png";
import "./index.scss";

const Work = () => {
  const [workList, setWorkList] = useState([
    {
      id: 1,
      imgUrl: img2,
      showFullDescription: false,
      duration: "May 2021",
      title: "Time Series Analysis on ADA stock",
      description: `Used Binance API to fetch data for ADA for the period of 3 Years. Used ARIMA, Holt-Winters, and LSTM model to train model and predict future stock prices.
                    Created Actual vs Predicted Plot for all the models. Based on metrics and the Plot LSTM performed better of all.`,
    },
    {
      id: 2,
      imgUrl: img1,
      showFullDescription: false,
      duration: "November 2020",
      title: "Health Insurance Cross Sell Prediction",
      description: `The Project is Predicting Health Insurance Owners who will be interested in Vehicle Insurance. Checked for null values within the dataset, performed data cleaning to remove null values. 
                    Performed Exploratory Data Analysis to derive insights based on Gender, age, and annual premium. Created a Correlation Plot to check correlation amongst target and independent variable.
                    Performed Over sampling to handle imbalance data. Implemented Random Forest, Gradient Boosting, Extended Gradient Boosting, and Sequential model using sigmoid and relu activation function.  `,
    },
    {
      id: 3,
      imgUrl: img5,
      showFullDescription: false,
      duration: "October 2020",
      title: "Housing Sales Analysis",
      description: `Imported the dataset to leverage the power of tableau to perform data analysis and data visualization 
                        by building and deploying dashboard using  line charts, pie charts and bar plots to show 
                        difference in sales prices based on year built, heating amenity and roof and house structure.
                        Helps in investing in house which gives maximum ROI.  `,
    },
    {
      id: 4,
      imgUrl: img3,
      title: "Face Recognition",
      showFullDescription: false,
      duration: "August 2020",
      description: `  Developed a python program using OpenCV to generate train and test dataset of facial images.
                            Rendered a neural network model by using VGG16 transfer learning technique, keras and TensorFlow for feature extraction from images. Performed  hyperparameter tunning and saved model in h5 format.
                        	Imported the model, provided external IP webcam support to use external devices for effective face recognition.
            `,
    },
    {
      id: 5,
      imgUrl: img4,
      title: "OCR",
      showFullDescription: false,
      duration: "April 2020",
      description: `Developed an OCR application with help of python packages; Tkinter, OpenCV, and PyTesseract. Application has
            capability to crop, resize, rotate, and invert image with accurate text extraction from image.`,
    },
    {
      id: 6,
      imgUrl: img6,
      title: "WEB Scrapping",
      showFullDescription: false,
      duration: "March 2020",
      description: `Developed a Program in python to perform webscarpping using beautiful soup 
                        on flipkart shopping site for mobile devices. Created dataframe of extracted data and exported it to CSV.`,
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
