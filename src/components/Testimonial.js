<<<<<<< HEAD
import React from "react";
import "../Css/Testimonials.css";

const testimonials = [
    {
        name: "Pauline Medhurst",
        role: "Registered Dietitian",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.",
        // image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        dark: true,
    },
    {
        name: "Ms. Della Reinger",
        role: "Nutrition Assistant Professor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue.",
        // image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        dark: false,
    },
    {
        name: "Bethany Parker",
        role: "Wellness Coach",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius.",
        // image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 4,
        dark: false,
    },
    {
        name: "Claude Reichel",
        role: "Therapeutic Nutritionist",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
        // image: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 4,
        dark: true,
    },
];

export default function Testimonials() {
    return (
        <div className="testimonials-page">
            <h2>
                Client Testimonials Memories <br /> We&apos;ve Helped Create
            </h2>
            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className={`testimonial-card ${t.dark ? "dark-card" : ""}`}
                    >
                        <p className="testimonial-text">“{t.text}”</p>
                        <div className="testimonial-footer">
                            {/* <img src={t.image} alt={t.name} className="testimonial-img" /> */}
                            <div>
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                        <div className="testimonial-stars">
                            {"⭐".repeat(t.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
=======
import React from "react";
import "../Css/Testimonials.css";

const testimonials = [
    {
        name: "Pauline Medhurst",
        role: "Registered Dietitian",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.",
        // image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        dark: true,
    },
    {
        name: "Ms. Della Reinger",
        role: "Nutrition Assistant Professor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue.",
        // image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        dark: false,
    },
    {
        name: "Bethany Parker",
        role: "Wellness Coach",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius.",
        // image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 4,
        dark: false,
    },
    {
        name: "Claude Reichel",
        role: "Therapeutic Nutritionist",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
        // image: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 4,
        dark: true,
    },
];

export default function Testimonials() {
    return (
        <div className="testimonials-page">
            <h2>
                Client Testimonials Memories <br /> We&apos;ve Helped Create
            </h2>
            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className={`testimonial-card ${t.dark ? "dark-card" : ""}`}
                    >
                        <p className="testimonial-text">“{t.text}”</p>
                        <div className="testimonial-footer">
                            {/* <img src={t.image} alt={t.name} className="testimonial-img" /> */}
                            <div>
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                        <div className="testimonial-stars">
                            {"⭐".repeat(t.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
