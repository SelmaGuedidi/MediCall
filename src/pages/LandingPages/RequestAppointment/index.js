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
  TextField,
  Button,
} from "@material-ui/core";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routesNavbar from "../../../routesNavbar";
import { AcceptButton, DeclineButton } from "../../../components/AcceptDeclineButton";
//import axios from "axios";

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
  const handleConfirmButtonClick = () => {
    const selectedDate = formData.date;
    const selectedTime = formData.time;

    // Perform any necessary actions with the selected date and time
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);

    // Prepare the data for the POST request
    const requestData = {
      date: selectedDate,
      time: selectedTime,
    };

    if (requestData.date && requestData.time) {
      console.log(requestData);
      formData.accepted = 0;
      formData.date = "";
      formData.time = "";
      setSelectedAppointment(null);
      appointments = appointments.filter(
        (appointment) => appointment.id !== selectedAppointment.id
      );
    }

    // // Send a POST request to the server with the updated data
    // axios
    //   .post("/api/appointments", requestData)
    //   .then((response) => {
    //     // Handle the response here
    //     console.log(response);
    //
    //     // Clear the form data and reset the selected appointment
    //     setFormData({
    //       date: "",
    //       time: "",
    //     });
    //     formData.accepted = 0;
    //     setSelectedAppointment(null);
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.log(error);
    //   });
  };

  const handleDeclineButtonClick = () => {
    // Filter out the selected appointment from the appointments array
    appointments = appointments.filter((appointment) => appointment.id !== selectedAppointment.id);

    // Send a DELETE request to the backend to delete the request
    // axios
    //   .delete(`/api/appointments/${selectedAppointment.id}`)
    //   .then((response) => {
    //     // Handle the response here
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.log(error);
    //   });

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
