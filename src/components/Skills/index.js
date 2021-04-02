import React from "react";
import './index.scss';

function Skills() {

    const programmingSkills = [
        {
            id: 1,
            name: "HTML5",
            color: "#1abc9c",
            percentage: "70"
        },
        {
            id: 2,
            name: "Java",
            color: "#f9bf3f",
            percentage: "80"
        },
        {
            id: 3,
            name: "Devops",
            color: "#a84cb8",
            percentage: "89"
        },
        {
            id: 4,
            name: "CSS",
            color: "#ec5453",
            percentage: "65"
        },
    ];
    const frameworkTools = [
        {
            id: 1,
            name: "Angular",
            color: "#4054b2",
            percentage: "65"
        },
        {
            id: 2,
            name: "React",
            color: "#2c98f0",
            percentage: "77"
        },
        {
            id: 3,
            name: "Machine Learning",
            color: "#f9bf3f",
            percentage: "82"
        },
        {
            id: 4,
            name: "C++",
            color: "#a84cb8",
            percentage: "73"
        },
    ];
    const operatingSystems = [
        {
            id: 1,
            name: "Mac",
            color: "#2c98f0",
            percentage: "85"
        },
        {
            id: 2,
            name: "Windows",
            color: "#a84cb8",
            percentage: "80"
        },
        {
            id: 3,
            name: "Linux",
            color: "#1abc9c",
            percentage: "70"
        },
        {
            id: 4,
            name: "Ubuntu",
            color: "#ec5453",
            percentage: "66"
        },
    ];

    return (
        <div className="skills-page component-spacing" id="skills">
            <div className="component-header"> my speciality </div>
            <div className="component-sub-header"> MY skills </div>
            <div className="component-header"> programming languages </div>
            {/* start of programming languages */}
            <div className="row m-0">
                {
                    programmingSkills.map(({ name, percentage, color }, index) => {
                        return (
                            <div key={index} data-aos="fade-left"
                                className="progress_bar col-md-6 p-0 pr-3">
                                <div className="pro-bar">
                                    <div className="progress_bar_title">
                                        {name}
                                        <span className="progress_number">
                                            {percentage}%
                                            </span>
                                    </div>
                                    <span className="progress-bar-inner"
                                        style={{
                                            "backgroundColor": `${color}`,
                                            "width": `${percentage}%`
                                        }}
                                        data-value={percentage}
                                        data-percentage-value={percentage}>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* end of programming languages */}

            <div className="component-header"> Framework tools </div>
            {/* start of Framework tools */}
            <div className="row m-0">
                {
                    frameworkTools.map(({ name, percentage, color }, index) => {
                        return (
                            <div key={index} data-aos="fade-left"
                                className="progress_bar col-md-6 p-0 pr-3">
                                <div className="pro-bar">
                                    <div className="progress_bar_title">
                                        {name}
                                        <span className="progress_number">
                                            {percentage}%
                                        </span>
                                    </div>
                                    <span className="progress-bar-inner"
                                        style={{
                                            "backgroundColor": `${color}`,
                                            "width": `${percentage}%`
                                        }}
                                        data-value={percentage}
                                        data-percentage-value={percentage}>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* end of Framework tools */}

            <div className="component-header"> Databases </div>

            <div className="component-header"> Operating System </div>
            {/* start of Operating System */}
            <div className="row m-0">
                {
                    operatingSystems.map(({ name, percentage, color }, index) => {
                        return (
                            <div key={index} data-aos="fade-left"
                                className="progress_bar col-md-6 p-0 pr-3">
                                <div className="pro-bar">
                                    <div className="progress_bar_title">
                                        {name}
                                        <span className="progress_number">
                                            {percentage}%
                                        </span>
                                    </div>
                                    <span className="progress-bar-inner"
                                        style={{
                                            "backgroundColor": `${color}`,
                                            "width": `${percentage}%`
                                        }}
                                        data-value={percentage}
                                        data-percentage-value={percentage}>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* end of Operating System */}
        </div >
    )
}
export default Skills;