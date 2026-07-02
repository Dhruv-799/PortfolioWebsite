import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <Box className="contact-section" id="contact">
      <Box className="section-container">
        <Typography variant="h3" className="section-title">
          Get In Touch
        </Typography>

        <Box className="contact-content">
          <Box className="contact-info">
            <Typography variant="h5" className="contact-subtitle">
              Let&#39;s Connect
            </Typography>
            <Typography variant="body1" className="contact-description">
              Have a project or opportunity? I&#39;d love to hear from you. Reach
              out and let&#39;s create something amazing together!
            </Typography>

            <Box className="social-links">
              <a
                href="mailto:your.email@example.com"
                className="social-link"
                title="Email"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Twitter"
              >
                <Twitter size={28} />
              </a>
            </Box>
          </Box>

          <Box className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
                className="form-field"
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                className="form-field"
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                required
                className="form-field"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={5}
                required
                className="form-field"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="submit-button"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
