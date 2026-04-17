// Footer Component - Simplified for appointments only
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <span className="footer__logo">🏥 Clinic Name</span>
                        <p className="footer__tagline">
                            Professional healthcare services tailored to your needs.
                        </p>
                    </div>

                    <div className="footer__contact">
                        <h4>Contact</h4>
                        <p>📍 Your Address</p>
                        <p>📞 +91 XXXXXXXXXX</p>
                        <p>📧 contact@example.com</p>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} Clinic Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
