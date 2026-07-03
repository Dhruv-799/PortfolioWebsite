import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { contacts } from "../CommonData/ContactDetails.jsx";

import { Box, Link } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Wanna Connect?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  onClick={(event) => {
                    if (isMailto) {
                      event.preventDefault();
                      window.location.href = contact.href;
                    }
                  }}
                >
                  {contact.icon}
                  <span>{contact.label}</span>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
