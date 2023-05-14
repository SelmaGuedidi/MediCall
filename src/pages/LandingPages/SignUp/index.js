import React from "react";
// react-router-dom components
import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { FormControlLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
//import axios from "axios";

//
// function handleSubmit(event) {
//   event.preventDefault(); // Empêche la soumission du formulaire
//
//   // Envoie les informations via une requête POST
//   axios
//     .post("/api/contact", {})
//     .then((response) => {
//       // Gère la réponse de la requête
//       console.log(response.data);
//     })
//     .catch((error) => {
//       // Gère les erreurs éventuelles
//       console.error(error);
//     });
// }

function SignUpBasic() {
  // const [rememberMe, setRememberMe] = useState(false);
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [isDoctor, setIsDoctor] = React.useState(false);
  const [doctorType, setDoctorType] = React.useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("TEST_TEST");
  // };

  const handleDoctorChange = (event) => {
    setIsDoctor(event.target.value === "doctor");
  };

  const handleDoctorTypeChange = (event) => {
    setDoctorType(event.target.value);
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
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
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="text" label="Name" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="text" label="LastName" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="date" label="" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox>

                  <RadioGroup name="job" aria-labelledby="a" row>
                    <FormControlLabel
                      control={<Radio />}
                      label="doctor"
                      value="doctor"
                      onChange={handleDoctorChange}
                      checked={isDoctor}
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="patient"
                      value="patient"
                      onChange={handleDoctorChange}
                      checked={!isDoctor}
                    />
                  </RadioGroup>
                  {isDoctor && (
                    <MKBox mb={2}>
                      <TextField
                        select
                        value={doctorType}
                        fullWidth
                        onChange={handleDoctorTypeChange}
                      >
                        <MenuItem value="">Select a type</MenuItem>
                        <MenuItem value="general">Generalist</MenuItem>
                        <MenuItem value="cardio">Cardiologist</MenuItem>
                        <MenuItem value="pedi">Pediatrician</MenuItem>
                        <MenuItem value="psych">Psychiatrist</MenuItem>
                        <MenuItem value="derma">Dermatologist</MenuItem>
                        <MenuItem value="opht">Ophtalmologist</MenuItem>
                        <MenuItem value="neuro">Neurologist</MenuItem>
                        <MenuItem value="gastro">Gastrologist</MenuItem>
                      </TextField>
                    </MKBox>
                  )}

                  {/*<MKBox display="flex" alignItems="center" ml={-1}>*/}
                  {/*  <Switch checked={rememberMe} onChange={handleSetRememberMe} />*/}
                  {/*  <MKTypography*/}
                  {/*    variant="button"*/}
                  {/*    fontWeight="regular"*/}
                  {/*    color="text"*/}
                  {/*    onClick={handleSetRememberMe}*/}
                  {/*    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}*/}
                  {/*  >*/}
                  {/*    &nbsp;&nbsp;Remember me*/}
                  {/*  </MKTypography>*/}
                  {/*</MKBox>*/}
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={() => {
                        // Envoie les informations via une requête POST
                        // axios
                        //   .post("/api/contact", {})
                        //   .then((response) => {
                        //     // Gère la réponse de la requête
                        //     console.log(response.data);
                        //   })
                        //   .catch((error) => {
                        //     // Gère les erreurs éventuelles
                        //     console.error(error);
                        //   });
                        window.location.replace("http://localhost:3000/presentation");
                      }}
                    >
                      sign up
                    </MKButton>
                  </MKBox>

                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignUpBasic;
