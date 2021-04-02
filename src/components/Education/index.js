import React from "react";
import './index.scss';

function Education() {
    const educationList = [
        {
            id: 1,
            href: "collapseOne",
            name: "Master degree in Data Science",
            description: `Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard
            dolor brunch. Food truck quinoa
            nesciunt laborum eiusmod.`
        },
        {
            id: 2,
            href: "collapseTwo",
            name: "Bachelor's Degree in Computer Science",
            description: `Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard
            dolor brunch. Food truck quinoa
            nesciunt laborum eiusmod.`
        },
        {
            id: 3,
            href: "collapseThree",
            name: "High school Secondary Education",
            description: `Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard
            dolor brunch. Food truck quinoa
            nesciunt laborum eiusmod.`
        }
    ];

    return (
        <div className="component-spacing" id="education">
            <div className="component-header"> Education </div>
            <div className="component-sub-header">Education </div>
            {
                educationList.map((value, index) => {
                    return (
                        <a key={index}
                            data-aos="fade-left"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={`#${value.href}`}
                            className={`btn w-100 mb-3 collapse-${index + 1}`}>
                            <div className="title">
                                <div>{value.name}</div>
                                <i className="fa fa-plus"></i>
                            </div>
                            <div className="panel-group" id="accordion">
                                <div className="panel">
                                    <div id={`${value.href}`}
                                        className="panel-collapse collapse">
                                        <div className="panel-body">
                                            {value.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Education;