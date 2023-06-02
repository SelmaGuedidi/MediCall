import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Paper,
  Divider,
  makeStyles,
} from "@material-ui/core";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routesNavbar from "../../../routesNavbar";
import MKButton from "../../../components/MKButton";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import { attributes, authenticated } from "../../../generic/generic_functions/authenticated";
import axios from "axios";

authenticated();

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));
const attributesData = attributes();
//const isAuthenticated = attributesData.authenticated;
const userId = attributesData.user_id;
const role = attributesData.role;
// if (role === "doctor") {
//   appointments = [
//     { id: 1, date: "2023-01-06", time: "6:00 PM", FirstName: "Foulen", LastName: "Ben foulen" },
//   ];
// } else {
//   appointments = [
//     { id: 1, date: "2023-01-06", time: "6:00 PM", FirstName: "Fehmi", LastName: "Touzani" },
//   ];
// }
function MySpace() {
  const classes = useStyles();
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  console.log(role);
  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };
  let otherUser = "doctor";
  useEffect(() => {
    const fetchDoctor = async (id) => {
      try {
        if (role === "doctor") {
          otherUser = "user";
        }
        const response = await axios.get(`http://localhost:3001/${otherUser}/${id}`);
        setSelectedDoctor(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching doctor:", error);
      }
    };

    if (selectedAppointment) {
      if (role === "doctor") {
        fetchDoctor(selectedAppointment.c_patientId);
      }
      fetchDoctor(selectedAppointment.c_doctorId);
    }
  }, [selectedAppointment]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  console.log(setIsButtonDisabled);
  // useEffect(() => {
  //   // Vérifier si la date n'est pas selectedAppointment.c_date.slice(0, 10)
  //   // et si nous ne sommes pas dans la plage horaire spécifiée
  //   if (selectedAppointment) {
  //     const currentDate = new Date();
  //     const appointmentDate = new Date(selectedAppointment.c_date);
  //     const appointmentTime =
  //       selectedAppointment.c_date.slice(11, 13) * 60 + selectedAppointment.c_date.slice(14, 16);
  //     const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();
  //     console.log(appointmentTime);
  //     const fifteenMinutesBefore = appointmentTime - 15;
  //     const oneHourFifteenMinutesAfter = appointmentTime + 75;
  //
  //     console.log(fifteenMinutesBefore);
  //     console.log(currentTime);
  //     console.log(oneHourFifteenMinutesAfter);
  //     if (
  //       appointmentDate.toDateString() !== currentDate.toDateString() ||
  //       currentTime < fifteenMinutesBefore ||
  //       currentTime > oneHourFifteenMinutesAfter
  //     ) {
  //       setIsButtonDisabled(true);
  //     } else {
  //       setIsButtonDisabled(false);
  //     }
  //   }
  // }, [selectedAppointment]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/consultation/accepted/${userId}`);
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <Grid container spacing={0}>
        <Grid item xs={4} style={{ marginLeft: "120px", marginTop: "160px" }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Appointments</Typography>
            <Divider />
            <List>
              {appointments
                .map((appointment) => (
                  <ListItem
                    key={appointment.c_id}
                    button
                    selected={selectedAppointment?.c_id === appointment.c_id}
                    onClick={() => handleAppointmentClick(appointment)}
                  >
                    <ListItemText
                      primary={appointment.c_date.slice(0, 10)}
                      secondary={appointment.c_date.slice(11, 16)}
                    />
                  </ListItem>
                ))
                .sort((a, b) => a.c_date <= b.c_date)}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={5} style={{ marginTop: "160px" }}>
          {selectedAppointment && selectedDoctor ? (
            <Paper className={classes.paper}>
              <Typography variant="h6">
                Appointment Details for {`${selectedDoctor.firstname} ${selectedDoctor.lastname}`}
              </Typography>
              <Divider />
              <Typography variant="subtitle1">
                Date: {selectedAppointment.c_date.slice(0, 10)}
              </Typography>
              <Typography variant="subtitle1">
                Time: {selectedAppointment.c_date.slice(11, 16)}
              </Typography>
              {isButtonDisabled ? (
                <span>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    disabled={isButtonDisabled}
                  >
                    <Icon>phone</Icon>
                  </MKButton>
                </span>
              ) : (
                <Link
                  to="/pages/landing-pages/agora"
                  state={{
                    appointment_id: selectedAppointment.c_id,
                    appointment_channel: selectedAppointment.c_channel,
                    token_call: selectedAppointment.c_token,
                  }}
                >
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    disabled={isButtonDisabled}
                  >
                    <Icon>phone</Icon>
                  </MKButton>
                </Link>
              )}
            </Paper>
          ) : (
            <Paper className={classes.paper}>
              <Typography variant="h6">No appointment selected</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default MySpace;
