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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";
//import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
//import Counters from "pages/Presentation/sections/Counters";
//import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
//import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
//import Download from "pages/Presentation/sections/Download";

// Presentation page components
//import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
//import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bgimage.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          height: 10,
          backgroundSize: "1500px 800px",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="grey"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to MediCall{" "}
            </MKTypography>
          </Grid>
        </Container>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      </MKBox>
      <DesignBlocks />
      <Testimonials />
      <MKBox pt={18} pb={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                Thank you for your support!
              </MKTypography>
              <MKTypography variant="body1" color="text">
                We hope that you enjoyed our services
              </MKTypography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              my={{ xs: 5, lg: "auto" }}
              mr={{ xs: 0, lg: "auto" }}
              sx={{ textAlign: { xs: "center", lg: "right" } }}
            >
              <MKSocialButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                color="twitter"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-twitter" />
                &nbsp;Tweet
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                color="facebook"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-facebook" />
                &nbsp;Share
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.pinterest.com/"
                target="_blank"
                color="pinterest"
              >
                <i className="fab fa-pinterest" />
                &nbsp;Pin it
              </MKSocialButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Presentation;
