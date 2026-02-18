import React from "react";
import { services, plans, testimonials, faqs } from "../data/data.js";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Dietician</h1>

            {/* Services Section */}
            <section>
                <h2>Services</h2>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <span>{service.icon}</span> <strong>{service.title}</strong> - {service.desc}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Plans Section */}
            <section>
                <h2>Plans</h2>
                <ul>
                    {plans.map((plan, index) => (
                        <li key={index}>
                            <strong>{plan.name}</strong> ({plan.price})
                            <ul>
                                {plan.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Testimonials Section */}
            <section>
                <h2>Testimonials</h2>
                <ul>
                    {testimonials.map((t, index) => (
                        <li key={index}>
                            "{t.quote}" — <em>{t.name}</em>
                        </li>
                    ))}
                </ul>
            </section>

            {/* FAQs Section */}
            <section>
                <h2>FAQs</h2>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <strong>Q: {faq.q}</strong>
                            <p>A: {faq.a}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
