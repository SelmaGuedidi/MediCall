import { useState } from "react";
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
import { AcceptButton, DeclineButton } from "../../../components/AcceptDeclineButton";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

let appointments = [
  {
    id: 1,
    date: "2023-05-12",
    user_name: "10:00 AM",
    user_lastname: "10:00 AM",
    email: "New York",
  },
  {
    id: 2,
    date: "2023-05-13",
    user_name: "2:00 PM",
    user_lastname: "10:00 AM",
    email: "Los Angeles",
  },
  { id: 3, date: "2023-05-14", user_name: "4:00 PM", user_lastname: "10:00 AM", email: "Chicago" },
];

function RequestAppointment() {
  const classes = useStyles();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleAcceptButtonClick = () => {
    // Handle accepting the request here

    const selectedDate = window.prompt("Select date (YYYY-MM-DD):");
    const selectedTime = window.prompt("Select time (HH:MM):");

    const regexPattern = new RegExp("^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$");

    const regexPattern1 = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");

    const validdate = regexPattern.test(selectedDate);
    const validTime = regexPattern1.test(selectedTime);
    if (!selectedDate || !selectedTime || !validdate || !validTime) {
      return;
    }

    const updatedAppointment = { ...selectedAppointment, selectedDate, selectedTime };

    appointments = appointments.filter((appointment) => appointment.id !== selectedAppointment.id);

    axios
      .put(`/api/appointments/${selectedAppointment.id}`, updatedAppointment)
      .then((response) => {
        // Handle the response here
        console.log(response);
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });

    setSelectedAppointment(null);
  };

  const handleDeclineButtonClick = () => {
    // Filter out the selected appointment from the appointments array
    appointments = appointments.filter((appointment) => appointment.id !== selectedAppointment.id);

    // Send a DELETE request to the backend to delete the request
    axios
      .delete(`/api/appointments/${selectedAppointment.id}`)
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
  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <Grid container spacing={0}>
        <Grid item xs={4} style={{ marginLeft: "120px", marginTop: "160px" }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Appointments</Typography>
            <Divider />
            <List>
              {appointments.map((appointment) => (
                <ListItem
                  key={appointment.id}
                  button
                  selected={selectedAppointment?.id === appointment.id}
                  onClick={() => handleAppointmentClick(appointment)}
                >
                  <ListItemText
                    primary={`${appointment.user_lastname} @ ${appointment.user_name}`}
                    secondary={`${appointment.date} @ ${appointment.email}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={5} style={{ marginTop: "160px" }}>
          {selectedAppointment ? (
            <Paper className={classes.paper}>
              <Typography variant="h6">
                Request Details for{" "}
                {`${selectedAppointment.user_lastname} @ ${selectedAppointment.user_name}`}
              </Typography>
              <Divider />
              <Typography variant="subtitle1">Time: {selectedAppointment.date}</Typography>
              <Typography variant="subtitle1">Location: {selectedAppointment.email}</Typography>
              <div>
                <AcceptButton onClick={handleAcceptButtonClick} />
                <DeclineButton onClick={handleDeclineButtonClick} />
              </div>
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
