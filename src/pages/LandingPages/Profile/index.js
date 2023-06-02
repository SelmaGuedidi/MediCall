import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routesNavbar from "../../../routesNavbar";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";
//import { useNavigate } from "react-router-dom";
//import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { attributes } from "../../../generic/generic_functions/authenticated";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  textField: {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));
//const navigate = useNavigate();
function Profile() {
  const location = useLocation();
  const { id, speciality } = location.state;
  console.log(id);
  const classes = useStyles();
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    const fetchDoctor = async (id) => {
      try {
        const res = await axios.get(`http://localhost:3001/doctor/${id}`);
        console.log(res);
        setDoctor(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDoctor(id);
  }, []);

  const attributesData = attributes();
  //const isAuthenticated = attributesData.authenticated;
  const userId = attributesData.user_id;
  const [appointment, setAppointment] = useState([]);
  // const requestdata = {
  //   doctor: id,
  //   patient: userId,
  // };
  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/consultation/${id}/${userId}`);
        console.log(res);
        setAppointment(res.data);
        console.log("Appointment :", appointment);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAppointment();
  }, []);

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Make an appointment");

  const handleClick = () => {
    const attributesData = attributes();
    const isAuthenticated = attributesData.authenticated;
    //const userId = attributesData.user_id;
    const role = attributesData.role;
    if (!isAuthenticated) {
      window.location.href = "/pages/authentication/sign-in";
    }
    if (role === "patient") {
      // Disable the button and update the text
      setButtonDisabled(true);
      setButtonText("Request sent");
      // Prepare the data for the POST request
      const requestData = {
        doctor: id,
        patient: userId,
      };

      //  Send a POST request to the server with the data
      axios
        .post(`http://localhost:3001/consultation`, requestData)
        .then((response) => {
          // Handle the response here
          console.log(response);
        })
        .catch((error) => {
          // Handle errors here
          console.log(error);
        });
    }
  };

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <Grid container spacing={2}>
        <Grid item xs={20} lg={6}>
          <Avatar
            alt="Doctor's Photo"
            src={doctor.image}
            className={classes.avatar}
            style={{ marginLeft: "200px", marginTop: "170px", height: "300px", width: "300px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <Grid style={{ marginRight: "80px", marginTop: "220px" }}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={{ xs: 20, sm: 18, md: 20 }}
              mb={{ xs: 20, sm: 18, md: 20 }}
              mx={3}
            >
              <MKBox
                variant="gradient"
                bgColor="info"
                style={{ background: "#588c7e" }}
                coloredShadow="success"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-3}
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                  textAlign="center"
                >
                  {doctor.firstname + " " + doctor.lastname}
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <Grid>
                  <MKTypography variant="body" color="text" mb={3} style={{ marginTop: "30px" }}>
                    Speciality : {speciality.charAt(0).toUpperCase() + speciality.slice(1)}
                  </MKTypography>
                </Grid>
                <Grid>
                  <MKTypography variant="body" color="text" mb={3}></MKTypography>
                  <MKTypography variant="body" color="text" mb={3} style={{ marginTop: "30px" }}>
                    Consultation Price: {doctor.visitprice}
                  </MKTypography>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton
                    variant="gradient"
                    color="#588c7e"
                    style={{ marginTop: "30px", background: "#588c7e" }}
                    onClick={handleClick}
                    disabled={buttonDisabled}
                  >
                    {buttonText}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default Profile;
