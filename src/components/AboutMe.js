import React from "react";
import "../Css/About.css";
import aboutImg from "../Images/About.png";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";


export default function About() {
    return (
        <>
            <Navbar1 />
            < section id="about" className="about-section" >
                <div className="about-container">
                    {/* Left image */}
                    <div className="about-image">
                        <img src={aboutImg} alt="Mrunal Shinde" />
                    </div>

                    {/* Right content */}
                    <div className="about-content">
                        <p className="about-label">ABOUT</p>
                        <h2 className="about-title">Meet Mrunal Shinde</h2>
                        <h3 className="about-subtitle">Certified clinical dietitian</h3>
                        <p className="about-text">
                            With 4 years of experience, I have helped clients successfully
                            reverse diabetes and restore hormonal balance. My approach blends
                            evidence-based clinical nutrition with lifestyle coaching to help
                            you achieve long-term results.
                        </p>

                        <ul className="about-list">
                            <li>🎓 Certified by GCTA, Australia</li>
                            <li>🏅 4+ years of professional experience</li>
                            <li>🕒 Consults by appointment (online & in-person)</li>
                        </ul>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
}