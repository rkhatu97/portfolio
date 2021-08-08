import React, { useState } from "react";
import "./index.scss";

function Experience() {
  const [experienceList, modifyExperienceList] = useState([
    {
      id: 1,
      showFullDescription: false,
      date: "January, 2021 - June 2021",
      title: "Machine Learning Software Engineer Intern, Dtonomy Inc.",
      description: [
        "Refined random forest model used for pattern discovery by performing feature addition and hyperparameter tuning. Deployed the model as a service on Docker container for identifying security detection and provide analysis.",
        "Constructed a node-red workflow using NodeJS, JavaScript, html, and python to set inbox rules to block spam mails with key word and to block sender with id, leveraging Microsoft Graph API and Azure app registration feature.",
        "Developed selenium script to automate the process for requesting and receiving consent for scopes of the graph API used to access and set the inbox rules. Created inject node in node-red to trigger workflow based on time, time zone and various data types.",
        "Created a PowerShell node in nod-red to run PowerShell script. Achieved OS independency for the node by installing PowerShell dependencies into docker container and deploying the node on top of container.",
      ],
    },
    {
      id: 2,
      showFullDescription: false,
      date: "August 2018 - December 2019",
      title:
        "Associate Consultant (DevOps Developer), Mindcraft Software PVT.LTD.",
      description: [
        "Leveraged DevOps technology; Jenkins, docker, and chef for automated deployment of MySQL server and client on multiple servers simultaneously which reduced the deployment time to 2 Hours from 1 week. Deployment of  Loan disbursement Web application on Tomcat server was automated for DEV/UAT/PROD environment using single Jenkins job, achieved timely deployment and testing.",
        "Developed Shell scripts to perform database/WAR file backup, user/database/table creation and set user access rights as per project security guideline. Triggered these shell scripts using cron jobs and Jenkins.",
        "Engineered software with help of ruby scripting for Universal Overseas Bank, Singapore. Documented POC’s for entire project, worked under Agile practices. Working Knowledge of finance and insurance sector.",
      ],
    },
  ]);

  function onViewMore(data) {
    const res = experienceList.map((value, index) => {
      if (parseInt(value.id) === parseInt(data.id)) {
        value.showFullDescription = !value.showFullDescription;
        return value;
      }
      return value;
    });
    modifyExperienceList(res);
  }

  return (
    <section className="experience-page component-spacing" id="experience">
      <div className="component-header"> Experience </div>
      <div className="component-sub-header"> Work Experience </div>
      {/* timeline start */}
      <ul className="timeline">
        {experienceList.map((value, index) => {
          const { date, title, description, showFullDescription } = value;
          const descriptionClass = showFullDescription
            ? "view-full-description"
            : "";

          return (
            <li key={index}
              className="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div data-aos="fade-left">
                <h2 className="h4 mb-0">{title}</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>
                  {date}
                </span>
                <ul className={`mt-3 description-content font-weight-light ${descriptionClass}`}>
                  {description.map((value, index) => {
                    return (
                        <li key={index} className="description-list"> 
                            {value} 
                        </li>
                    )
                  })}
                </ul>
                <div className="view-more" onClick={(_) => onViewMore(value)}>
                  {showFullDescription ? "View less" : "View more"}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* timeline end */}
    </section>
  );
}

export default Experience;
