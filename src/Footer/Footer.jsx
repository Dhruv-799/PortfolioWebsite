import { Box, Link, Typography } from "@mui/material";
import React from "react";
import {
  Code as LeetCodeIcon,
  Email,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  const contacts = [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: <LinkedIn /> },
    { label: "GitHub", href: "https://github.com/", icon: <GitHub /> },
    {
      label: "Email",
      href: "mailto:shadhruv09@gmail.com",
      icon: <Email />,
    },
  ];

  return (
    <Box className="footerContainer">
      <Typography variant="h6" align="center" className="footerTitle">
        Made with ❤️ by Dhruv
      </Typography>
      <Box className="contactInfo">
        {contacts.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            {contact.icon}
            <span>{contact.label}</span>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
