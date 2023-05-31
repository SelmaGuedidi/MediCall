/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
//import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections

import { AccountBox, Info } from "@mui/icons-material";
import MakeAnAppointment from "./pages/LandingPages/MakeAnAppointment";
import SignUp from "./pages/LandingPages/SignUp";
import Profile from "./pages/LandingPages/Profile";
import NotificationCenter from "./pages/LandingPages/MySpace";
import Agora from "./pages/LandingPages/Agora";

import RequestAppointment from "./pages/LandingPages/RequestAppointment";
import SignOut from "./layouts/pages/authentication/sign-out";
import AboutUs from "./pages/LandingPages/AboutUs";

const routes = [
  {
    name: "account",
    icon: <AccountBox />,
    collapse: [
      {
        name: "sign in",
        route: "/pages/authentication/sign-in",
        component: <SignIn />,
      },
      {
        name: "sign up",
        route: "/pages/authentication/sign-up",
        component: <SignUp />,
      },
      {
        name: "sign out",
        route: "/pages/authentication/sign-out",
        component: <SignOut />,
      },
    ],
  },
  {
    name: "Make an appointment",
    icon: <Icon> person</Icon>,
    route: "/pages/landing-pages/MakeAnAppointment",
    component: <MakeAnAppointment />,
  },
  {
    name: "Appointment requests",
    icon: <Icon> person</Icon>,
    route: "/pages/landing-pages/RequestAppointment",
    component: <RequestAppointment />,
  },
  {
    name: "My Space",
    icon: <Icon>article</Icon>,
    route: "/pages/landing-pages/MySpace",
    component: <NotificationCenter />,
  },
  {
    name: "Info",
    icon: <Info />,
    collapse: [
      {
        name: "about us",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },
      {
        name: "contact us",
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
      {
        name: "author",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
      {
        name: "profile",
        route: "/pages/landing-pages/profile",
        component: <Profile />,
      },
      {
        name: "agora",
        route: "/pages/landing-pages/agora",
        component: <Agora />,
      },
    ],
  },
];

export default routes;
