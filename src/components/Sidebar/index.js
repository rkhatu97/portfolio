import React, { useState } from 'react';
import './index.scss';

function Sidebar() {
    const [showMobileMenu, setMobileMenuState] = useState(false);

    const navigationMenus = [
        { id: 0, name: 'home' },
        { id: 1, name: 'about' },
        { id: 2, name: 'work' },
        { id: 3, name: 'skills' },
        { id: 4, name: 'education' },
        { id: 5, name: 'experience' },
        { id: 7, name: 'contact' }
    ];
    function onMenuClick() {
        if (window.innerWidth < 769) {
            setMobileMenuState(!showMobileMenu)
        }
    }
    function navigationMenuCode() {
        return (
            navigationMenus.map(({ name }, index) => {
                return (
                    <div key={index}>
                        <a href={`#${name}`}
                            onClick={_ => onMenuClick()}>
                            {name}
                        </a>
                    </div>
                )
            })
        )
    }

    return (
        <div className="sidebar-container">
            <div className="navigation-bar">
                <div className="links"> {navigationMenuCode()} </div>
                <div className="hamburger-menu"
                    onClick={_ => setMobileMenuState(!showMobileMenu)}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            {
                showMobileMenu ? (
                    <div className="mobile-menu">
                        <p className="close-icon" 
                            onClick={_ => setMobileMenuState(!showMobileMenu)}> 
                            &#x2715; 
                        </p>
                        {navigationMenuCode()} 
                    </div>
                ) : null
            }
        </div>
    )
}

export default Sidebar;