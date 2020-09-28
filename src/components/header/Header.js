import React from 'react';
import './Header.css';

export const Header = (props) => {
    return (
        <div id="container">
            <nav id="navigation-container">
                <ul id="navigation">
                    <li className="selected">Home</li>
                    <li>Projects</li>
                    <li>Education</li>
                    <li>Work</li>
                </ul>
            </nav>
        </div>
    );
};