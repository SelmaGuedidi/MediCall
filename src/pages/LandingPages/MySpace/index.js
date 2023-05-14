import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent, IconButton, Avatar } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    margin: theme.spacing(1),
  },
  content: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
  },
  message: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function NotificationCenter() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleOpen}>
        <Avatar className={classes.avatar}>N</Avatar>
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        className={classes.snackbar}
      >
        <SnackbarContent
          className={classes.content}
          message={<span className={classes.message}>This is a notification message!</span>}
          action={[
            <IconButton key="close" color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
}
export default NotificationCenter;
