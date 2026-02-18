<<<<<<< HEAD
import React from "react";
import { services } from "../data/data";
import "../Css/services.css"; // import css file

export default function Services() {
    return (
        <section id="services" className="services-section">
            <h2 className="services-title">What I Can Help You With</h2>
            <div className="services-grid">
                {services.map((s) => (
                    <div key={s.title} className="service-card">
                        <div className="service-header">
                            <div className="icon-box">{s.icon}</div>
                            <h3>{s.title}</h3>
                        </div>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
=======
import React from "react";
import { services } from "../data/data";
import "../Css/services.css"; // import css file

export default function Services() {
    return (
        <section id="services" className="services-section">
            <h2 className="services-title">What I Can Help You With</h2>
            <div className="services-grid">
                {services.map((s) => (
                    <div key={s.title} className="service-card">
                        <div className="service-header">
                            <div className="icon-box">{s.icon}</div>
                            <h3>{s.title}</h3>
                        </div>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
