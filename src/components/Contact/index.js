import React from 'react';
import './index.scss';

function Contact() {
    const contactList = [
        {
            id: 1,
            title: "phone",
            class: "fa-phone",
            value: "+1 (617) 818-3265"
        },
        {
            id: 2,
            title: "mail",
            class: "fa-envelope",
            value: "rkhatu97@gmail.com"
        },
        {
            id: 3,
            title: "link",
            class: "fa-linkedin-square",
            value: "https://www.linkedin.com/in/rohit-khatu-ba5951166"
        },
        {
            id: 4,
            class: "fa-map-marker",
            value: "Boston, Massachusetts"
        }
    ];

    return (
        <div className="component-spacing" id="contact">
            <div className="component-header"> Get in touch </div>
            <div className="component-sub-header">Contact Details </div>
            <div className="contact-list">
                {
                    contactList.map((data, index) => {
                        return (
                            <div className="list-item" key={index}>
                                <div className={`icon icon-${index + 1}`}>
                                    <i className={`fa ${data.class}`}
                                        aria-hidden="true"></i>
                                </div>
                                <div className="value" data-aos="fade-left">
                                    {
                                        data.title === "phone"
                                            ? (
                                                <a href={`tel:${data.value}`}>
                                                    {data.value}
                                                </a>
                                            ) : data.title === "mail"
                                                ? (
                                                    <a href={`mailto:${data.value}`}>
                                                        {data.value}
                                                    </a>
                                                ) : data.title === "link"
                                                    ? (
                                                        <a href={`${data.value}`}
                                                            target="_blank" rel="noopener noreferrer">
                                                            {data.value}
                                                        </a>
                                                    ) : data.value

                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Contact;