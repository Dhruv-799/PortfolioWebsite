import { Box, Link, Typography } from "@mui/material";
import React from "react";
import {
  Code as LeetCodeIcon,
  Email,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import "./Footer.css";
import { contacts } from "../CommonComponents/Seperator/CommonData/ContactDetails";

const Footer = () => {
  return (
    <Box className="footerContainer">
      <Box className="contactInfo">
        {contacts.map((contact) => {
          const isExternal = contact.href.startsWith("http");
          return (
            <Link
              key={contact.label}
              href={contact.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="contactLink"
            >
              {contact.icon}
              <span>{contact.label}</span>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Footer;
