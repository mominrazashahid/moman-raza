import { useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { withRouter } from "react-router";
import { color_palette } from "../../../../theme/theme";

function SideMenu(props) {
  const { selectedIndex, handleListItemClick } = props;

  useEffect(() => {
    const Index = localStorage.getItem("index");
    handleListItemClick(Index);
  }, []);
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        {/* ------------------------------------------------------ Dashboard */}
        <ListItem
          style={
            selectedIndex === "dashboard"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "dashboard"}
          onClick={event => {
            handleListItemClick("dashboard");
            props.history.push("/dashboard");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={selectedIndex === 0 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* ------------------------------------------------------ Discipline */}
        <ListItem
          style={
            selectedIndex === "discipline"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "discipline"}
          onClick={event => {
            handleListItemClick("discipline");
            props.history.push("/discipline");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={selectedIndex === "discipline" ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Discipline" />
        </ListItem>

        {/* -------------------------------------------------- Speciality */}
        <ListItem
          style={
            selectedIndex === "speciality"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "speciality"}
          onClick={event => {
            handleListItemClick("speciality");
            props.history.push("/speciality");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={selectedIndex === "speciality" ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Speciality" />
        </ListItem>
        {/* ------------------------------------------------------ Title */}
        <ListItem
          style={
            selectedIndex === "title"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "title"}
          onClick={event => {
            handleListItemClick("title");
            props.history.push("/title");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={selectedIndex === "title" ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Title" />
        </ListItem>

        {/* ------------------------------------------------------ Experience */}
        <ListItem
          style={
            selectedIndex === "experience"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "experience"}
          onClick={event => {
            handleListItemClick("experience");
            props.history.push("/experience");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={selectedIndex === "experience" ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        {/* ------------------------------------------------------  types of clients */}
        <ListItem
          style={
            selectedIndex === "types-of-clients"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "types-of-clients"}
          onClick={event => {
            handleListItemClick("types-of-clients");
            props.history.push("/types-of-clients");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={
                selectedIndex === "types-of-clients" ? { color: "white" } : {}
              }
            />
          </ListItemIcon>
          <ListItemText primary="Types of clients" />
        </ListItem>
        {/* ------------------------------------------------------ Size of clients */}
        <ListItem
          style={
            selectedIndex === "size-of-clients"
              ? { backgroundColor: color_palette.primary, color: "white" }
              : {}
          }
          selected={selectedIndex === "size-of-clients"}
          onClick={event => {
            handleListItemClick("size-of-clients");
            props.history.push("/size-of-clients");
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon
              style={
                selectedIndex === "size-of-clients" ? { color: "white" } : {}
              }
            />
          </ListItemIcon>
          <ListItemText primary="Size of clients" />
        </ListItem>

        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
        {/* ------------------------------------------------------  */}
      </List>
    </>
  );
}

export default withRouter(SideMenu);
