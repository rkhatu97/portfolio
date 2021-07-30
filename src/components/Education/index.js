import React, { useState } from "react";
import './index.scss';

function Education() {
    const [educationList, modifyEducationList] = useState(
        [
            {
                id: 1,
                toggleStatus: true,
                name: "Masters Degree in Data Analytics",
                description: `Related Course :
                Probability Theory and Statistics.
                Data Management and Big Data.
                Data Visualization.
                Intermediate Analytics.
                Data Mining.
                Fundamentals of Artificial Intelligence.`
            },
            {
                id: 2,
                toggleStatus: true,
                name: "Bachelor's Degree in Computer Engineering",
                description: `Related Courses:
                Object Oriented Programming Methodology.
                Data Structures.
                Database Management Systems.
                Operating Systems.
                Structured and Object Oriented Analysis and Design.
                Big Data Analytics.`
            }
        ]
    )
    function onTitleClick(selectedId) {
        const modifiedList = educationList.map((data) => {
            if(data.id === selectedId) {
                data.toggleStatus = !data.toggleStatus;
                return data
            }
            return data
        });
        modifyEducationList(modifiedList);
    }

    return (
        <section className="education-page component-spacing" id="education">
            <div className="component-header"> Education </div>
            <div className="component-sub-header">Education </div>
            {
                educationList.map((value, index) => {
                    const toggleStatus = value.toggleStatus;
                    return (
                        <div key={index} className="collapse-container">
                            <div onClick={_ => onTitleClick(value.id)}
                                className={toggleStatus ? "title" : "title mb-4"}>
                                <div>{value.name}</div>
                                {
                                    toggleStatus
                                        ? <i className="fa fa-minus"></i> 
                                        : <i className="fa fa-plus"></i>
                                }
                            </div>
                            <div className={toggleStatus ? "panel-body" : "display-none"}>
                                {value.description}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Education;