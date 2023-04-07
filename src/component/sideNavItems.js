import { Expand, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import React from "react";
import { sideNavData } from "../utilities/sideNavData";
import { Link, useNavigate } from "react-router-dom";

const styles = (theme) => ({
  root: {
    maxWidth: 360,
    height: "auto",
    borderRadius: "20px",
    padding: "20px 20px",
    background:
      " linear-gradient(185.52deg, #1AB5F2 -28.11%, #000000 134.62%);",
  },
  icon: {
    color: "#FFFFFF",
  },
  label: {
    color: "#FFFFFF",
  },
});
const SideNavItems = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      //   sx={{
      //     width: "100%",
      //     maxWidth: 360,
      //     background:
      //       " linear-gradient(185.52deg, #1AB5F2 -28.11%, #000000 134.62%);",
      //   }}
      className={classes.root}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {sideNavData.map((cl, index) => {
        return (
          <>
            {!cl.expand ? (
              <ListItemButton>
                <ListItemIcon>
                  <Icon className={classes.icon}>{cl.icon}</Icon>
                </ListItemIcon>
                <Link
                  to={cl.path}
                  onClick={() => navigate(cl.path)}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText className={classes.label} primary={cl.title} />
                </Link>
              </ListItemButton>
            ) : (
              <>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <Icon className={classes.icon}>{cl.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText className={classes.label} primary={cl.title} />
                  {open ? (
                    <ExpandLess className={classes.icon} />
                  ) : (
                    <ExpandMore className={classes.icon} />
                  )}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {cl.subMenu.length > 0 &&
                      cl.subMenu.map((subMenu, index) => {
                        return (
                          <ListItemButton>
                            <ListItemIcon>
                              <Icon className={classes.icon}>
                                {subMenu.icon}
                              </Icon>
                            </ListItemIcon>
                            <ListItemText
                              className={classes.label}
                              primary={subMenu.title}
                            />
                          </ListItemButton>
                        );
                      })}
                  </List>
                </Collapse>
              </>
            )}
          </>
        );
      })}
    </List>
  );
};

export default withStyles(styles)(SideNavItems);
