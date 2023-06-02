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
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { namespeciality } = location.state;
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
  const renderData = speciality.map(({ name, doctors, id }) =>
    namespeciality === name ? (
      <Grid container spacing={3} sx={{ mb: 10 }} key={name}>
        <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            {doctors.map(({ image, firstname, lastname, id }) => (
              <Grid item xs={12} md={4} sx={{ mb: 2 }} key={id}>
                <Link
                  to={{ pathname: "/pages/landing-pages/Profile", state: { id, speciality: name } }}
                >
                  <ExampleCard image={image} name={firstname} lastname={lastname} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <Grid key={id}></Grid>
    )
  );

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <Grid component="section" my={6} py={6}>
        <Container>
          <Grid container item sx={{ marginTop: "100px" }}>
            <Container sx={{ mt: 6 }}>{renderData} </Container>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
export default Speciality;
