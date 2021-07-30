import React, { useState } from 'react';
import './index.scss';

function Experience() {
    const [experienceList, modifyExperienceList] = useState([
        {
            id: 1,
            showFullDescription: false,
            date: "January, 2021 - June 2021",
            title: "Machine Learning Engineer Intern, Dtonomy Inc. (Client: Columbia University)",
            description: `Refined random forest model used for pattern discovery by performing feature addition and hyperparameter tuning.
            Deployed the model as a service on Docker container for identifying security detection and provide analysis.
            Constructed a node-red workflow using NodeJS, JavaScript, html, and python to set inbox rules to block spam mails
            with key word and to block sender with id, leveraging Microsoft Graph API and Azure app registration feature.
            Wrote selenium script to automate the process for requesting and receiving consent for scopes of the graph API used
            to access and set the inbox rules.
            Created a PowerShell node-red workflow to run PowerShell script and perform activity to set enterprise level mail
            flow rules to block spam mails and to block sender over Microsoft Exchange Server. Achieved OS independency for
            the node by installing PowerShell dependencies into docker container and deploying the node on top of container.`
        },
        {
            id: 2,
            showFullDescription: false,
            date: "August 2018 - December 2019",
            title: "Associate Consultant (DevOps Developer), Mindcraft Software PVT.LTD.",
            description: `Leveraged DevOps technology; Jenkins, docker, and chef for automated deployment of MySQL server and client on
            multiple servers simultaneously which reduced the deployment time to 2 Hours from 1 week. Deployment of Loan
            disbursement Web application on Tomcat server was automated for DEV/UAT/PROD environment using single
            Jenkins job.
            Wrote Shell scripts to perform database/WAR file backup, user/database/table creation and set user access rights as
            per project security guideline. Triggered these shell scripts using automation tools.
            Engineered software with help of ruby scripting for Universal Overseas Bank, documented POC’s for entire project,
            worked under Agile practices. Working Knowledge of finance and insurance sector.
            Deployed on overseas project at client site in Singapore, achieved timely deployment and testing.`
        }
    ])

    function onViewMore(data) {
        const res = experienceList.map((value, index) => {
            if(parseInt(value.id) === parseInt(data.id)) {
                value.showFullDescription = !value.showFullDescription;
                return value;
            }
            return value
        });
        modifyExperienceList(res);
    }

    return (
        <section className="experience-page component-spacing" id="experience">
            <div className="component-header"> Experience </div>
            <div className="component-sub-header"> Work Experience </div>
            {/* timeline start */}
            <ul className="timeline">
                {
                    experienceList.map((value, index) => {
                        const {
                            date,
                            title,
                            description,
                            showFullDescription
                        } = value;
                        const descriptionClass = showFullDescription 
                            ? "view-full-description" : "";

                        return (
                            <li className="timeline-item bg-white 
                                rounded ml-3 p-4 shadow" key={index}>
                                <div data-aos="fade-left">
                                    <h2 className="h4 mb-0">
                                        {title}
                                    </h2>
                                    <span className="small text-gray">
                                        <i className="fa fa-clock-o mr-1"></i>{date}
                                    </span>
                                    <p className={`mt-3 font-weight-light ${descriptionClass}`}>
                                        {description}
                                    </p>
                                    <div className="view-more" 
                                        onClick={_ => onViewMore(value)}> 
                                        {showFullDescription ? "View less" : "View more"}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* timeline end */}
        </section>
    )
}

export default Experience;