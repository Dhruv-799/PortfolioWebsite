import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { contacts } from "../CommonData/ContactDetails.jsx";

import { Box, Link } from "@mui/material";

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Get in touch</Button>
      <Modal
  open={open}
  onClose={handleClose}
  BackdropProps={{
    className: "contactModalBackdrop",
  }}
>
  <Box className="contactModalContainer">
    <Box className="contactModal">
      <Box className="contactInfo">
        {contacts.map((contact) => {
          const isMailto = contact.href.startsWith("mailto:");

          return (
            <Link
              key={contact.label}
              href={contact.href}
              target={isMailto ? "_self" : "_blank"}
              rel={isMailto ? undefined : "noreferrer"}
              className="contactLink"
            >
              {contact.icon}
              <span>{contact.label}</span>
            </Link>
          );
        })}
      </Box>
    </Box>
  </Box>
</Modal>
    </Box>
  );
}
