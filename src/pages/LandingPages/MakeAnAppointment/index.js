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
//import MKInput from "components/MKInput";
//import MKButton from "components/MKButton";
//import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import DesignBlocks from "../../Presentation/sections/DesignBlocks";
import routesNavbar from "../../../routesNavbar";
//import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function MakeAnAppointment() {
  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <DesignBlocks />
    </>
  );
}

export default MakeAnAppointment;
