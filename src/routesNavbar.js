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
import NotificationCenter from "./pages/LandingPages/MySpace";
import SignOut from "layouts/pages/authentication/sign-out";
//import Cookies from "js-cookie";
import RequestAppointment from "./pages/LandingPages/RequestAppointment";
import AboutUs from "./pages/LandingPages/AboutUs";
//import ProfileUser from "./pages/LandingPages/ProfileUser";
import { attributes } from "./generic/generic_functions/authenticated";
import ProfileUser from "./pages/LandingPages/ProfileUser";

// const isAuthenticated = Cookies.get("authenticated");
// const role = Cookies.get("role");

const attributesData = attributes();
const isAuthenticated = attributesData.authenticated;
//const userId = attributesData.user_id;
const role = attributesData.role;
//console.log(userId);
const routesNavbar = [
  {
    name: "account",
    icon: <AccountBox />,
    collapse: [
      !isAuthenticated && {
        name: "sign in",
        route: "/pages/authentication/sign-in",
        component: <SignIn />,
      },
      !isAuthenticated && {
        name: "sign up",
        route: "/pages/authentication/sign-up",
        component: <SignUp />,
      },
      isAuthenticated && {
        name: "Profile",
        route: "/pages/landing-pages/profile-user",
        component: <ProfileUser />,
      },
      isAuthenticated && {
        name: "sign out",
        route: "/pages/authentication/sign-out",
        component: <SignOut />,
      },
      // isAuthenticated && {
      //   name: "profile",
      //   route: "/pages/landing-pages/profile",
      //   component: <ProfileUser />,
      // },
    ].filter(Boolean),
  },

  {
    name: role === "doctor" ? "Appointment requests" : "Make an Appointment",
    icon: <Icon> person</Icon>,
    route:
      role === "doctor"
        ? "/pages/landing-pages/RequestAppointment"
        : "/pages/landing-pages/MakeAnAppointment",
    component: role === "doctor" ? <RequestAppointment /> : <MakeAnAppointment />,
  },

  isAuthenticated && {
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
    ],
  },
];

export default routesNavbar;
