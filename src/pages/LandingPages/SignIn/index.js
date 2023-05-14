import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import MKBox from "../../../components/MKBox";
import Card from "@mui/material/Card";
import MKTypography from "../../../components/MKTypography";
import { Link } from "react-router-dom";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import bgImage from "../../../assets/images/bg-sign-in-basic.jpeg";
import MuiLink from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import routesNavbar from "../../../routesNavbar";
const SignUpBasic = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send form data using POST request
    axios
      .post("myurl", { formData })
      .then((response) => {
        console.log(response);
        //window.location.replace("http://localhost:3000/presentation");
      })
      .catch((err) => {
        console.log(formData);
        console.log(err);
        //window.location.replace("http://localhost:3000/presentation");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DefaultNavbar routes={routesNavbar} transparent light />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email Address"
                        fullWidth
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        type="password"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          style={{ color: "white" }}
                        >
                          Sign In
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
        <MKBox mt={3} mb={1} textAlign="center">
          <MKTypography variant="button" color="text">
            Already have an account?{" "}
            <MKTypography
              component={Link}
              to="/pages/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign Up
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
};

export default SignUpBasic;
