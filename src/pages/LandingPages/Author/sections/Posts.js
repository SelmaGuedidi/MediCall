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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
//import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images

import { useEffect, useState } from "react";
import axios from "axios";

function Places() {
  const [doctor, setDoctors] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost:3001/doctor",
  });
  useEffect(() => {
    const fetchDoctor = async () => {
      let response = await client.get("?limit=4");
      const limitedDoctors = response.data.slice(0, 4);
      console.log(limitedDoctors);
      setDoctors(limitedDoctors);
    };
    fetchDoctor();
  }, []);
  const renderData = doctor.map(({ image, firstname, lastname }) => (
    <Grid item xs={12} sm={6} lg={3} key={name}>
      <TransparentBlogCard
        image={image}
        title={firstname + " " + lastname}
        description=""
        action={{
          type: "internal",
          route: "",
          color: "info",
          label: "read more",
        }}
      />
    </Grid>
  ));
  return (
    <MKBox component="section" py={2} sr={{ marginTop: "100px" }}>
      <Container sr={{ marginTop: "100px" }}>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6} textAlign="center">
            Check out our top rated doctors
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
