import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./LeftDrawer.css";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import MenuItems from ".././CommonComponents/Seperator/CommonData/LeftDrawerData";
import { IconButton } from "@mui/material";

export default function LeftDrawer({ setValue, value }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerContent = (
    <Box className="drawer-container" role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {MenuItems.map((item) => (
          <ListItem key={item.value} disablePadding>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setValue(item.value);
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)} className="menuIconButton">
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}
