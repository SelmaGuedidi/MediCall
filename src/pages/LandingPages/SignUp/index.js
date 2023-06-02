import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
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
import routesNavbar from "../../../routesNavbar";
import { not_authenticated } from "../../../generic/generic_functions/authenticated";
//import { useNavigate } from "react-router";
const SignUpBasic = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    role: "",
    speciality: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPasswordSubmitted, setIsPasswordSubmitted] = useState(false);
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isSubmitted && !emailRegex.test(formData.email)) {
      return "Invalid email address";
    } else {
      return "";
    }
  };
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setIsSubmitted(false); // Clear the email submission flag
    } else if (event.target.name === "password") {
      setIsPasswordSubmitted(false); // Clear the password submission flag
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setIsPasswordSubmitted(true);
    try {
      const response = await fetch("http://localhost:3001/user/subscribe", {
        method: "POST",
        body: JSON.stringify(formData), // Convert the formData to JSON
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to application/json
        },
      });

      // Check the status code of the response
      if (Math.floor(response.status / 100) === 4) {
        console.log("Error :");
        console.log(response);
        console.log(formData);
      } else if (response.status === 201) {
        // let navigate = useNavigate();
        // navigate("/pages/authentication/sign-in");
        console.log(response);
        window.location.href = "/pages/authentication/sign-in";
      } else {
        console.log("Unexpected response status:", response.status);
        console.log(response);
      }
    } catch (error) {
      // Handle errors here
      console.log(error);
    }
  };

  not_authenticated();

  return (
    <>
      <DefaultNavbar
        routes={routesNavbar}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
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
                  Sign up
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
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstname"
                        name="firstname"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        inputProps={{
                          maxLength: 10, // Set the maximum length of the input
                        }}
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastname"
                        name="lastname"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        inputProps={{
                          maxLength: 10, // Set the maximum length of the input
                        }}
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="birthdate"
                        name="birthdate"
                        label="Date of Birth"
                        fullWidth
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={formData.birthdate}
                        onChange={handleChange}
                      />
                    </Grid>
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
                        error={isSubmitted && validateEmail() !== ""}
                        helperText={isSubmitted && validateEmail()}
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
                        error={isPasswordSubmitted && formData.password === ""}
                        helperText={
                          isPasswordSubmitted && formData.password === ""
                            ? "Password is required"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        {/*<FormLabel component="legend">Role</FormLabel>*/}
                        <RadioGroup
                          aria-label="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          row
                          required
                        >
                          <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                          <FormControlLabel value="user" control={<Radio />} label="Patient" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    {formData.role === "doctor" && (
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          {/*<FormLabel component="legend">Choice</FormLabel>*/}
                          <Select
                            id="speciality"
                            name="speciality"
                            value={formData.speciality}
                            onChange={handleChange}
                          >
                            <MenuItem value="">Select a type</MenuItem>

                            <MenuItem value="gynecologist">Gynecologist</MenuItem>
                            <MenuItem value="dermatologist">Dermatologist</MenuItem>
                            <MenuItem value="radiologist">Radiologist</MenuItem>
                            <MenuItem value="neurologist">Neurologist</MenuItem>
                            <MenuItem value="otolaryngologist">Otolaryngologist</MenuItem>
                            <MenuItem value="gastroenterologist">Gastroenterologist</MenuItem>
                            <MenuItem value="ophthalmologist">Ophthalmologist</MenuItem>
                            <MenuItem value="orthopedist">Orthopedist</MenuItem>
                            <MenuItem value="psychiatrist">Psychiatrist</MenuItem>
                            <MenuItem value="cardiologist">Cardiologist</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          style={{ color: "white" }}
                        >
                          Submit
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
              Sign In
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
};

export default SignUpBasic;
