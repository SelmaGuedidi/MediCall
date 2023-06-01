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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">
            Trusted by over
            <br />
          </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679+ Tunisian Patients
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Take a look at some of the feedback we got!
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Mouna Slimane"
              date="1 day ago"
              review="Using MediCall has been a wonderful experience. The platform offers a wide range of specialists, allowing me to consult with doctors across various medical fields. It has been incredibly helpful for managing my chronic condition, providing me with timely and personalized care without the need for in-person visits."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Rami Helmi"
              date="1 week ago"
              review="I highly recommend MediCall to anyone in need of medical consultations. The platform is user-friendly, and scheduling appointments is a breeze. The doctors are professional, and I appreciate the ease of discussing my health concerns through video calls. It's a reliable and efficient teleconsultation solution."
              rating={5}
              style={{ background: "#588c7e" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Insaf kammoun"
              date="3 weeks ago"
              review="I am extremely satisfied with the services provided by MediCall. The teleconsultation feature has been a lifeline for me, especially during the current pandemic. The platform's secure and confidential communication ensures my privacy, and the doctors have been prompt in addressing my concerns and providing appropriate guidance."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
