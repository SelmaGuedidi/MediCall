import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Paper,
  Divider,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routesNavbar from "../../../routesNavbar";
import { AcceptButton, DeclineButton } from "../../../components/AcceptDeclineButton";

import axios from "axios";
import { attributes } from "../../../generic/generic_functions/authenticated";
//import axios from "axios";

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
//const role = attributesData.role;
// if (!isAuthenticated || role !== "doctor") {
//   window.location.href = "/pages/authentication/sign-in";
// }

function RequestAppointment() {
  const classes = useStyles();
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    accepted: 0,
  });
  const handleAcceptButtonClick = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      accepted: 1,
    }));
  };
  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/consultation/requests/${userId}`);
        setAppointments(response.data);
        console.log(appointments);
      } catch (error) {
        console.log("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  // useEffect(() => {
  //   setAppointments(appointments);
  //   console.log("appointments: ", appointments);
  // });

  const handleConfirmButtonClick = () => {
    const selectedDate = formData.date;
    const selectedTime = formData.time;

    // Perform any necessary actions with the selected date and time
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);

    const thedate = selectedDate + " " + selectedTime;
    // Prepare the data for the POST request
    const requestData = {
      date: thedate,
    };
    if (selectedDate && selectedTime) {
      // console.log(requestData);
      // console.log(date);
      formData.accepted = 0;
      formData.date = "";
      formData.time = "";
      setSelectedAppointment(null);
      setAppointments(
        appointments.filter((appointment) => appointment.id !== selectedAppointment.id)
      );
      // Send a POST request to the server with the updated data
      axios
        .patch(`http://localhost:3001/consultation/${selectedAppointment.c_id}`, requestData)
        .then((response) => {
          // Handle the response here
          console.log(response);

          // Clear the form data and reset the selected appointment
          setFormData({
            date: "",
            time: "",
          });
          formData.accepted = 0;
          setSelectedAppointment(null);
        })
        .catch((error) => {
          // Handle errors here
          console.log(error);
        });
    }
  };

  const handleDeclineButtonClick = () => {
    // Filter out the selected appointment from the appointments array
    setAppointments(
      appointments.filter((appointment) => appointment.c_id !== selectedAppointment.c_id)
    );

    // Send a DELETE request to the backend to delete the request
    axios
      .delete(`http://localhost:3001/consultation/${selectedAppointment.c_id}`)
      .then((response) => {
        // Handle the response here
        console.log(response);
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });

    // Deselect the selected appointment
    setSelectedAppointment(null);
  };

  useEffect(() => {
    const fetchDoctor = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        setSelectedDoctor(response.data);
        console.log(response.data);
        console.log("user", selectedDoctor);
      } catch (error) {
        console.log("Error fetching doctor:", error);
      }
    };

    if (selectedAppointment) {
      fetchDoctor(selectedAppointment.c_patientId);
    }
  }, [selectedAppointment]);

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <Grid container spacing={0}>
        <Grid item xs={4} style={{ marginLeft: "120px", marginTop: "160px" }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Appointments</Typography>
            <Divider />
            <List>
              {appointments.map((appointment, index) => (
                <ListItem
                  key={appointment.c_id}
                  button
                  selected={selectedAppointment?.c_id === appointment.c_id}
                  onClick={() => handleAppointmentClick(appointment)}
                >
                  <ListItemText primary={`Appointment ${index + 1}`} />
                </ListItem>
              ))}
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
                Date of birth: {selectedDoctor.birthdate.slice(0, 10)}
              </Typography>
              <Typography variant="subtitle1">Email: {selectedDoctor.email}</Typography>
              <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                <AcceptButton onClick={handleAcceptButtonClick} />{" "}
                <DeclineButton onClick={handleDeclineButtonClick} />
              </div>
              {formData.accepted === 1 && (
                <Grid item xs={12} style={{ marginTop: "16px" }}>
                  <TextField
                    required
                    id="date"
                    name="date"
                    label="Date"
                    fullWidth
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    id="time"
                    name="time"
                    label="Time"
                    fullWidth
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.time}
                    onChange={handleChange}
                    style={{ marginTop: "16px" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirmButtonClick}
                    style={{ marginTop: "16px" }}
                  >
                    Confirm
                  </Button>
                </Grid>
              )}
            </Paper>
          ) : (
            <Paper className={classes.paper}>
              <Typography variant="h6">No request selected</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default RequestAppointment;
