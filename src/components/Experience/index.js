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
        "Built and Refined random forest model for pattern discovery by performing feature addition and hyperparameter tuning. Deployed the model as a service on the Docker container to identify malicious URLs and provide analysis.",
        "Constructed an O365 node-red workflow using NodeJS, JavaScript, HTML, CSS, and python to set inbox rules to block spam mails with keyword and to block sender with id, leveraging MS Graph API and Azure app registration.",
        "Developed selenium script automating request and receipt of consent for scopes of graph API used to access and set the inbox rules. Created inject node in node-red to trigger a workflow based on time, time zone and various data types.",
        "Created a PowerShell node in nod-red to run the PowerShell script. Achieved OS independence for the node by installing PowerShell dependencies into the docker container and deploying the node on top of the container.",
      ],
    },
    {
      id: 2,
      showFullDescription: false,
      date: "August 2018 - December 2019",
      title:
        "Associate Consultant (DevOps Developer), Mindcraft Software PVT.LTD.",
      description: [
        "Leveraged DevOps technology; Jenkins, docker, and chef for parameterized automated deployment of MySQL server/client as a cluster on multiple servers simultaneously which reduced deployment time to 2 Hours from a week.",
        "Developed CICD pipeline for automated deployment of  Loan disbursement Web application on Tomcat server running on AWS EC2 instance for DEV/UAT/PROD environment using sole Jenkins job, achieved end to end testing.",
        "Developed and triggered Shell/Python scripts using cron jobs and Jenkins to perform database/WAR file backup, user/database/table creation, set DB access rights for user as per database design, and for health monitoring of service.",
        "Documented Proof of Concept of engineered software, CICD pipeline, and DB design for Universal Overseas Bank, Singapore and Fullerton, India, worked under Agile SDLC. Working knowledge of finance and insurance sector.",
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
