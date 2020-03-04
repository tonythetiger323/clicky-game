import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  return (
    <Paper variant="outlined">
      <Typography variant="h1">Clicky Game!</Typography>
      <Typography variant="h6">
        Click on an image to earn points, but don't click on any more than once!
      </Typography>
    </Paper>
  );
}
