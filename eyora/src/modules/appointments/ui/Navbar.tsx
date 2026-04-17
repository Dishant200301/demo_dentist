// Navbar Component - Simplified for appointments only
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">🏥</span>
                    <span className="navbar__logo-text">Clinic Name</span>
                </Link>

                <div className="navbar__menu">
                    <Link
                        to="/"
                        className="navbar__link navbar__link--active"
                    >
                        Book Appointment
                    </Link>
                </div>

                <Link to="/" className="navbar__cta">
                    📅 Book Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
