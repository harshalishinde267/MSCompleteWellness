import React from "react";
import "../Css/FooterStyle.css";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* About Section */}
                <div className="footer-section about">
                    <h2>M&apos;s Complete Wellness</h2>
                    <p>
                        Helping you achieve a healthier lifestyle through personalized diet
                        plans, nutrition guidance, and wellness coaching.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact">
                    <h3>Contact</h3>
                    <ul>
                        <li><MapPin size={16} /> Dhankawadi, Pune, Maharashtra 411043</li>
                        <li><Phone size={16} /> +91 7769917444</li>
                        <li><Mail size={16} /> psychologist.mrunal@gmail.com</li>
                    </ul>

                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a> */}
                    </div>
                </div>

                {/* Location Section */}
                <div className="footer-section location">
                    <h3>Our Location</h3>
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6123456789!2d73.8501234!3d18.4656789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb123456789%3A0xabcd987654321ef!2sFV82%2B53F%2C%20Gulab%20Nagar%20Rd%2C%20Adarsh%20Nagar%2C%20Chandrabhaga%20Nagar%2C%20Dhankawadi%2C%20Pune%2C%20Maharashtra%20411043!5e0!3m2!1sen!2sin!4v1691234567890"
                        width="100%"
                        height="180"
                        style={{ border: "0", borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} M&apos;s Complete Wellness. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
