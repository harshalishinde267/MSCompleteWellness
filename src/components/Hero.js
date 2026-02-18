// import React from "react";
// import heroImage from "../Images/heroImage.mp4"; // make sure the path is correct

// export default function Hero() {
//     return (
//         <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "50px 20px", background: "#f5f5f5" }}>

//             {/* Left side - Text and Buttons */}
//             <div style={{ flex: 1, paddingRight: "20px" }}>
//                 <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Your Key to Healthy Living</h1>
//                 <p style={{ maxWidth: "500px", marginBottom: "20px" }}>
//                     Personalized diet plans, coaching, and lifestyle strategies to help you reach your health goals—without giving up the foods you love.
//                 </p>
//                 <div>
//                     <button style={{ marginRight: "10px", padding: "10px 20px", borderRadius: "20px" }}>View Plans</button>
//                     <button style={{ padding: "10px 20px", borderRadius: "20px" }}>Explore Services</button>
//                 </div>
//             </div>

//             {/* Right side - Image */}
//             <div style={{ flex: 1, textAlign: "right" }}>
//                 <img
//                     src={heroImage}
//                     alt="Healthy lifestyle"
//                     style={{ maxWidth: "100%", height: "auto", borderRadius: "15px" }}
//                 />
//             </div>
//         </section>
//     );
// }

import React from "react";
import heroVideo from "../Images/HeroImage.mp4"; // make sure the path is correct
export default function Hero() {
    return (
        <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            {/* Background Video */}
            <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // cover full area
                    zIndex: -2,
                }}
            />

            {/* Black Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent black
                    zIndex: -1,
                }}
            ></div>

            {/* Centered Text */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    textAlign: "center",
                    color: "#FCEBF2", // your color
                    padding: "0 20px",
                    zIndex: 1,
                }}
            >
                <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
                    Your Key to Healthy Living
                </h1>
                <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 20px" }}>
                    Personalized diet plans, coaching, and lifestyle strategies to help you
                    reach your health goals—without giving up the foods you love.
                </p>
                <div>
                    <button
                        style={{
                            marginRight: "10px",
                            padding: "10px 20px",
                            borderRadius: "20px",
                            border: "none",
                            background: "#FCEBF2",
                            color: "#333",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        View Plans
                    </button>
                    <button
                        style={{
                            padding: "10px 20px",
                            borderRadius: "20px",
                            border: "2px solid #FCEBF2",
                            background: "transparent",
                            color: "#FCEBF2",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Explore Services
                    </button>
                </div>
            </div>
        </section>
    );
}
