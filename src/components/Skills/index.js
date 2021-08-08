import React from "react";
import './index.scss';

function Skills() {
    const programmingSkills = [
        {
            id: 1,
            name: "Python",
            color: "#1abc9c",
            percentage: "95"
        },
        {
            id: 2,
            name: "R",
            color: "#f9bf3f",
            percentage: "95"
        },
        {
            id: 3,
            name: "JavaScript",
            color: "#a84cb8",
            percentage: "80"
        },
        {
            id: 4,
            name: "HTML/CSS",
            color: "#ec5453",
            percentage: "80"
        },
        {
            id: 5,
            name: "Bash Programming",
            color: "#4054b2",
            percentage: "85"
        },
    ];
    const frameworkTools = [
        {
            id: 1,
            name: "GIT",
            color: "#4054b2",
            percentage: "90"
        },
        {
            id: 2,
            name: "Tableau",
            color: "#2c98f0",
            percentage: "83"
        },
        {
            id: 3,
            name: "Power BI",
            color: "#f9bf3f",
            percentage: "75"
        },
        {
            id: 4,
            name: "Anaconda",
            color: "#a84cb8",
            percentage: "80"
        },
        {
            id: 5,
            name: "Office 365",
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
        {
            id: 4,
            name: "Hadoop",
            color: "#a84cb8",
            percentage: "80"
        },
        {
            id: 5,
            name: "Spark",
            color: "#1abc9c",
            percentage: "80"
        },
    ];
    const cloud = [
        {
            id: 1,
            name: "AWS",
            color: "#f9bf3f",
            percentage: "82"
        },
        {
            id: 2,
            name: "GCP",
            color: "#2c98f0",
            percentage: "80"
        },
        {
            id: 2,
            name: "Azure",
            color: "#ec5453",
            percentage: "80"
        },
        {
            id: 3,
            name: "Docker",
            color: "#4054b2",
            percentage: "85"
        },
        {
            id: 4,
            name: "Jenkins",
            color: "#1abc9c",
            percentage: "90"
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
            percentage: "82"
        },
        {
            id: 4,
            name: "Ubuntu",
            color: "#ec5453",
            percentage: "82"
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

            <div className="component-header"> Databases/Big Data Tech </div>
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

            <div className="component-header"> Cloud and Automation </div>
            {/* start of Operating System */}
            <div className="row mx-0 my-4">
                {
                    cloud.map(({ name, percentage, color }, index) => {
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