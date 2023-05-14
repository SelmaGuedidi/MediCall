import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections

import { AccountBox, Info } from "@mui/icons-material";
import MakeAnAppointment from "./pages/LandingPages/MakeAnAppointment";
import SignUp from "./pages/LandingPages/SignUp";

const routesNavbar = [
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
        route: "/pages/authentication/sign-un",
        component: <SignUp />,
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
    name: "My Space",
    icon: <Icon>article</Icon>,
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
    ],
  },
];

export default routesNavbar;
