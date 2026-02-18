<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../data/data"; // array of nav items
import "../Css/Navbar1.css";

export default function Navbar1() {
    return (
        <header className="navbar1">
            <div className="nav-container1">
                <div className="logo1">M&apos;s Complete Wellness</div>
                <nav className="nav-links1">
                    {nav.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
=======
import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../data/data"; // array of nav items
import "../Css/Navbar1.css";

export default function Navbar1() {
    return (
        <header className="navbar1">
            <div className="nav-container1">
                <div className="logo1">M&apos;s Complete Wellness</div>
                <nav className="nav-links1">
                    {nav.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
