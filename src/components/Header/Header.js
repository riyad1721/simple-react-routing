import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink
                to="/home"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                Home
            </NavLink>
            <NavLink
                to="/friends"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                Friends
            </NavLink>
            <NavLink
                to="/about"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                About
            </NavLink>

        </div>
    );
};

export default Header;