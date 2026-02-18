// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Configure transporter (use Gmail or SMTP)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your_email@gmail.com", // replace with your email
        pass: "your_app_password",    // use App Password (not normal password)
    },
});

// Route
app.post("/send-mail", async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        // Mail to Doctor
        await transporter.sendMail({
            from: email,
            to: "doctor_email@gmail.com", // doctor email
            subject: "New Consultation Request",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        });

        // Confirmation Mail to User
        await transporter.sendMail({
            from: "your_email@gmail.com",
            to: email,
            subject: "Thanks for contacting us!",
            text: `Hi ${name},\n\nThanks for reaching out. We’ll get back to you soon.\n\n- Doctor's Office`,
        });

        res.json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending message." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
