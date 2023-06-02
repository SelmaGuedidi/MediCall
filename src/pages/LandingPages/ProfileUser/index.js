import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routesNavbar from "../../../routesNavbar";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";
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

function ProfileUser() {
  const attributesData = attributes();
  //const isAuthenticated = attributesData.authenticated;
  const id = attributesData.user_id;
  const role = attributesData.role;
  console.log(id);
  const classes = useStyles();
  console.log(classes);
  const [doctor, setDoctor] = useState([]);
  console.log(doctor);
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     window.location.href = "/pages/authentication/sign-in";
  //     return;
  //   }
  //
  //   const fetchUser = async (userId) => {
  //     try {
  //       const res = await axios.get(`http://localhost:3001/user/${userId}`);
  //       setDoctor(res.data);
  //     } catch (err) {
  //       console.log("Error:", err);
  //     }
  //   };
  //
  //   fetchUser(userId);
  // }, [isAuthenticated, userId]);
  let profile = "user";
  if (role === "doctor") {
    profile = "doctor";
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${profile}/${id}`);
        const userData = response.data;
        console.log(userData);
        setDoctor(response.data);
        // Process the user data as needed
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchUser();
  }, [id]);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
    console.log(role);
    console.log(id);
  };

  const handleConfirmation = () => {
    // Send a DELETE request to the backend
    if (showConfirmation) {
      axios
        .delete(`http://localhost:3001/${role}/${id}`)
        .then((response) => {
          // Handle the response here

          window.location.href = " /pages/authentication/sign-out";
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
          {role === "doctor" ? (
            <Avatar
              alt="Doctor's Photo"
              src={doctor.image}
              className={classes.avatar}
              style={{
                marginLeft: "200px",
                marginTop: "170px",
                height: "300px",
                width: "300px",
              }}
            />
          ) : (
            <Avatar
              alt="Doctor's Photo"
              src="https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg?w=2000"
              className={classes.avatar}
              style={{
                marginLeft: "200px",
                marginTop: "170px",
                height: "300px",
                width: "300px",
              }}
            />
          )}
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
                {role === "doctor" && (
                  <Grid>
                    <MKTypography variant="body" color="text" mb={3} style={{ marginTop: "30px" }}>
                      Consultation Price: {doctor.visitprice}
                    </MKTypography>
                  </Grid>
                )}
                <Grid>
                  <MKTypography variant="body" color="text" mb={3} style={{ marginTop: "30px" }}>
                    Email : {doctor.email}
                  </MKTypography>
                </Grid>
                {/*<Grid>*/}
                {/*  <MKTypography variant="body" color="text" mb={3} style={{ marginTop: "30px" }}>*/}
                {/*    Birth Date : {doctor.birthdate.slice(0, 10)}*/}
                {/*  </MKTypography>*/}
                {/*</Grid>*/}
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2} spacing={2}>
                  {/*<Grid item>*/}
                  {/*  <MKButton*/}
                  {/*    variant="gradient"*/}
                  {/*    color="warning"*/}
                  {/*    style={{ marginTop: "30px", background: "#FFD700" }}*/}
                  {/*    onClick={handleClick}*/}
                  {/*  >*/}
                  {/*    Edit profile*/}
                  {/*  </MKButton>*/}
                  {/*</Grid>*/}
                  <Grid item>
                    <MKButton
                      variant="gradient"
                      color="danger"
                      style={{ marginTop: "30px", background: "#FF0000" }}
                      onClick={handleDelete}
                    >
                      Delete profile
                    </MKButton>
                  </Grid>
                </Grid>
                {showConfirmation && (
                  <div>
                    <MKBox p={3}>
                      <p>You sure you want to delete your profile ?</p>
                      <Grid
                        container
                        item
                        justifyContent="center"
                        xs={12}
                        mt={5}
                        mb={2}
                        spacing={2}
                      >
                        <Grid item>
                          <MKButton
                            variant="gradient"
                            color="danger"
                            style={{ marginTop: "30px", background: "#FF0000" }}
                            onClick={handleConfirmation}
                          >
                            Yes
                          </MKButton>
                        </Grid>
                        <Grid item>
                          <MKButton
                            variant="gradient"
                            color="blue"
                            style={{
                              marginTop: "30px",
                              background: "transparent",
                              border: "1px solid blue",
                              color: "blue",
                            }}
                            onClick={() => setShowConfirmation(false)}
                          >
                            No
                          </MKButton>
                        </Grid>
                      </Grid>
                    </MKBox>
                  </div>
                )}
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileUser;
