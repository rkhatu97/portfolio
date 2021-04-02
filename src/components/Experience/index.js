import React from 'react';
import './index.scss';

function Experience() {

    const experienceList = [
        {
            id: 1,
            date: "21st March, 2019",
            title: "Title of section 1",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque scelerisque diam non nisi semper, et elementum
            lorem ornare. Maecenas placerat facilisis mollis. Duis
            sagittis ligula in sodales vehicula....`
        },
        {
            id: 2,
            date: "5th April, 2019",
            title: "Title of section 2",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque scelerisque diam non nisi semper, et elementum
            lorem ornare. Maecenas placerat facilisis mollis. Duis
            sagittis ligula in sodales vehicula....`
        },
        {
            id: 3,
            date: "18th August, 2019",
            title: "Title of section 3",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque scelerisque diam non nisi semper, et elementum
            lorem ornare. Maecenas placerat facilisis mollis. Duis
            sagittis ligula in sodales vehicula....`
        },
        {
            id: 4,
            date: "10th March, 2019",
            title: "Title of section 4",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque scelerisque diam non nisi semper, et elementum
            lorem ornare. Maecenas placerat facilisis mollis. Duis
            sagittis ligula in sodales vehicula....`
        }
    ];

    return (
        <div className="component-spacing" id="experience">
            <div className="component-header"> Experience </div>
            <div className="component-sub-header"> Work Experience </div>
            {/* timeline start */}
            <ul className="timeline">
                {
                    experienceList.map((value, index) => {
                        return (
                            <li className="timeline-item bg-white 
                                rounded ml-3 p-4 shadow" key={index}>
                                {/* <div className="timeline-arrow"></div> */}
                                <div data-aos="fade-left">
                                    <h2 className="h4 mb-0">
                                        {value.title}
                                    </h2>
                                    <span className="small text-gray">
                                        <i className="fa fa-clock-o mr-1"></i>{value.date}
                                    </span>
                                    <p className="text-medium mt-2 font-weight-light">
                                        {value.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* timeline end */}
        </div>
    )
}

export default Experience;