import * as React from "react";
import { Box, Button, Link, Modal, Typography } from "@mui/material";
import { contacts } from "../CommonData/ContactDetails.jsx";
import "./ContactModal.css";

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button className="contactButton" onClick={() => setOpen(true)}>
        Get In Touch
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
      >
        <Box className="contactModal">
          <Typography variant="h5" className="contactHeading">
            Let's Connect
          </Typography>

          <Typography className="contactSubHeading">
            I'd love to hear from you. Feel free to reach out through any of the
            platforms below.
          </Typography>

          <Box className="contactInfo">
            {contacts.map((contact) => {
              const isMailto = contact.href.startsWith("mailto:");

              return (
                <Link
                  key={contact.label}
                  href={contact.href}
                  target={isMailto ? "_self" : "_blank"}
                  rel={isMailto ? undefined : "noreferrer"}
                  underline="none"
                  className="contactLink"
                  onClick={() => setOpen(false)}
                >
                  <Box className="contactIcon">{contact.icon}</Box>

                  <Typography>{contact.label}</Typography>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </>
  );
}