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
            name: "JavaScript",
            color: "#f9bf3f",
            percentage: "80"
        },
        {
            id: 3,
            name: "Python",
            color: "#a84cb8",
            percentage: "95"
        },
        {
            id: 4,
            name: "R",
            color: "#ec5453",
            percentage: "95"
        },
        {
            id: 5,
            name: "Bash Programming",
            color: "#ec5453",
            percentage: "85"
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
    const databases = [
        {
            id: 1,
            name: "MySQL",
            color: "#4054b2",
            percentage: "92"
        },
        {
            id: 2,
            name: "PostgreSQL",
            color: "#2c98f0",
            percentage: "80"
        },
        {
            id: 3,
            name: "MariaDB",
            color: "#f9bf3f",
            percentage: "95"
        },
    ];
    const operatingSystems = [
        {
            id: 1,
            name: "Mac",
            color: "#2c98f0",
            percentage: "80"
        },
        {
            id: 2,
            name: "Windows",
            color: "#a84cb8",
            percentage: "85"
        },
        {
            id: 3,
            name: "Linux",
            color: "#1abc9c",
            percentage: "80"
        },
        {
            id: 4,
            name: "Ubuntu",
            color: "#ec5453",
            percentage: "80"
        },
    ];

    return (
        <section className="skills-page component-spacing" id="skills">
            <div className="component-header"> my speciality </div>
            <div className="component-sub-header"> MY skills </div>
            <div className="component-header"> programming languages </div>
            {/* start of programming languages */}
            <div className="row mx-0 my-4">
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
            <div className="row mx-0 my-4">
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
            {/* start of Operating System */}
            <div className="row mx-0 my-4">
                {
                    databases.map(({ name, percentage, color }, index) => {
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

            <div className="component-header"> Operating System </div>
            {/* start of Operating System */}
            <div className="row mx-0 my-4">
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
        </section>
    )
}
export default Skills;