/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
//import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKInput from "components/MKInput";
//import MKButton from "components/MKButton";
//import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import Grid from "@mui/material/Grid";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../examples/Cards/BlogCards/CenteredBlogCard";
import Container from "@mui/material/Container";
import routesNavbar from "../../../routesNavbar";
//import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function MySpace() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routesNavbar} />
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard
                      icon="public"
                      title="Fully integrated"
                      description="We get insulted by others, lose trust for those We get back freezes"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard
                      icon="payments"
                      title="Payments functionality"
                      description="We get insulted by others, lose trust for those We get back freezes"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      icon="apps"
                      title="Prebuilt components"
                      description="We get insulted by others, lose trust for those We get back freezes"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      icon="3p"
                      title="Improved platform"
                      description="We get insulted by others, lose trust for those We get back freezes"
                    />
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              NotificationCenter
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default MySpace;
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
