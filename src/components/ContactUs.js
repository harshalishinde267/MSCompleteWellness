// import React, { useState } from "react";
// import "../Css/Contact.css";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus("✅ Message sent successfully!");
//         setForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("❌ Failed to send message. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Error sending message.");
//     }
//   };

//   return (
//     <section className="contact-curvy">
//       <div className="contact-left">
//         <h2 className="diet-heading">Let’s Talk About Your Diet Goals</h2>
//         <p>
//           Whether you’re looking for weight management, healthy recipes or
//           personalized plans – reach out and we’ll craft something for you.
//         </p>
//         <img
//           src="/images/healthy-food.svg"
//           alt="Healthy Diet"
//           className="contact-illustration"
//         />
//       </div>

//       <div className="contact-right">
//         <div className="form-heading">Book a Consultation</div>
//         <form onSubmit={handleSubmit} className="contact-form-card">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Tell us about your goals"
//             value={form.message}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit">Send Message</button>
//           {status && <p className="status">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import "../Css/Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-box">
        {/* Left Side */}
        <div className="contact-left">
          <h2>
            Let’s Talk About <br /> Your Diet Goals
          </h2>
          <p>
            Whether you’re looking for weight management, healthy recipes or
            personalized plans – reach out and we’ll craft something for you.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/765/765612.png"
            alt="Fruit Bowl"
          />
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <h3>Book a Consultation</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us about your goals"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
