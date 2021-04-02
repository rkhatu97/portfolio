import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './index.scss';

function Sidebar() {
    const [selectedMenuId, setSelectedId] = useState(0);
    const [showMobileMenu, setMobileMenuState] = useState(false);

    const navigationMenus = [
        { id: 0, name: 'home' },
        { id: 1, name: 'about' },
        { id: 2, name: 'work' },
        { id: 3, name: 'skills' },
        { id: 4, name: 'education' },
        { id: 5, name: 'experience' },
        { id: 6, name: 'certificate' },
        { id: 7, name: 'contact' }
    ];

    function onMenuClick(id) {
        setSelectedId(id)
        if (window.innerWidth < 769) {
            setMobileMenuState(!showMobileMenu)
        }
    }

    return (
        <div className="sidebar-container">
            {/* <div className="profile-photo" /> */}
            {/* <div className="title"> Rohit Khatu </div> */}
            <div className="navigation-bar">
                <div className="links">
                    {
                        navigationMenus.map(({ id, name }, index) => {
                            return (
                                <span key={index}>
                                    <Link to={name}
                                        className={selectedMenuId === index
                                            ? "active-link" : "link"}
                                        onClick={_ => onMenuClick(id)}>
                                        {name}
                                    </Link>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="hamburger-menu"
                    onClick={_ => setMobileMenuState(!showMobileMenu)}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            {/* {
                showMobileMenu ? (
                    <div className="mobile-menu">
                        {
                            navigationMenus.map(({ id, name }, index) => {
                                return (
                                    <div>
                                        <Link to={name}
                                            className={selectedMenuId === index
                                                ? "active-link" : "link"}
                                            onClick={_ => onMenuClick()}>
                                            {name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            } */}
        </div>
    )
}

export default Sidebar;