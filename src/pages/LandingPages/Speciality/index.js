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

// react-router-dom components
import { Link } from "react-router-dom";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
//import data from "pages/Presentation/sections/data/designBlocksData";
import { useEffect, useState } from "react";
import axios from "axios";
import routesNavbar from "../../../routesNavbar";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";

function Speciality() {
  const [speciality, seSpecialities] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost:3001/speciality",
  });
  useEffect(() => {
    const fetchSeciality = async () => {
      let response = await client.get("");
      seSpecialities(response.data);
    };
    fetchSeciality();
  }, []);
  const renderData = speciality.map(({ name, doctors }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={name}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <Link to="/pages/authentication/sign-out">
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </MKTypography>
          </Link>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {doctors.map(({ image, firstname, lastname, id }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to="/pages/landing-pages/Profile" state={{ id: id, speciality: name }}>
                <ExampleCard image={image} name={firstname} lastname={lastname} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <MKBox component="section" my={6} py={6}>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75, marginTop: "100px" }}
          >
            <MKTypography variant="h2" fontWeight="bold">
              View our Doctors
            </MKTypography>
            <MKTypography variant="body1" color="text">
              We have multiple options of doctors in different specialities to choose from just for
              you.
            </MKTypography>
          </Grid>
        </Container>
        <Container sx={{ mt: 6 }}>{renderData} </Container>
      </MKBox>
    </>
  );
}
export default Speciality;
