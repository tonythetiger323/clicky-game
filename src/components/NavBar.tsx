import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Clicky Game</Typography>
        <Typography variant="h6">Click an image to begin!</Typography>
        <Typography variant="h6">Score: 0 | Top Score: 0</Typography>
      </Toolbar>
    </AppBar>
  );
}
