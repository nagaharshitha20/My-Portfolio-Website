"use client";
import '../styles/ContactSection.css';
import { useState } from "react";
import { Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Missing EmailJS environment variables");
      }

      await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      {/* Header */}
      <div className="contact-header">
        <h2 className="section-title">Ground Control📡</h2>
        <div className="section-underline" />
      </div>

      <Box
        className="contact-body"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Mobile column, Desktop row
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: { xs: 4, md: 6 }, // 2rem vs 3rem
          flexWrap: "wrap",
          padding: { xs: "0 1rem", md: 0 }
        }}
      >
        {/* LEFT BOX */}
        <Box
          className="get-in-touch"
          sx={{
            width: { xs: "100%", md: "250px" },
            maxWidth: { xs: "400px", md: "none" },
            flex: { xs: "none", md: 1 },
            marginTop: { xs: "1rem", md: "80px" },
            marginLeft: { xs: "auto", md: 0 },
            marginRight: { xs: "auto", md: 0 }
          }}
        >
          <h3 className="get-in-touch-title">Get in Touch</h3>

          <div className="get-in-touch-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:knagaharshitha2005@gmail.com">
              knagaharshitha2005@gmail.com
            </a>
          </div>

          <div className="get-in-touch-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              href="https://linkedin.com/in/naga-harshitha-karra"
              target="_blank"
            >
              naga-harshitha-karra
            </a>
          </div>

          <div className="get-in-touch-item">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/nagaharshitha20" target="_blank">
              nagaharshitha20
            </a>
          </div>
        </Box>

        {/* RIGHT FORM */}
        <Box
          className="contact-section"
          sx={{
            flex: 1,
            width: { xs: "100%", md: "auto" },
            maxWidth: { xs: "400px", md: "none" },
            paddingLeft: { xs: 0, md: "2rem" },
            margin: { xs: "0 auto", md: 0 },
            minWidth: { xs: "auto", md: "350px" }
          }}
        >
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-intro">
            Feel free to reach out for collaborations or inquiries.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* NAME + EMAIL ROW */}
            <div className="contact-row">
              <div className="input-container textarea-container1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Name</label>
              </div>

              <div className="input-container textarea-container1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="input-container textarea-container">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </Box>
      </Box>
    </section>
  );
}
