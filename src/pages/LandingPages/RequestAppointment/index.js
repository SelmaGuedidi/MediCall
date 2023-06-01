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
//import { attributes } from "../../../generic/generic_functions/authenticated";
//import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));
//const attributesData = attributes();
//const isAuthenticated = attributesData.authenticated;
//const userId = attributesData.user_id;
//const role = attributesData.role;
// if (!isAuthenticated || role !== "doctor") {
//   window.location.href = "/pages/authentication/sign-in";
// }
let appointments = [
  {
    id: 1,
    FirstName: "X",
    LastName: "X",
    email: "X@gmail.com",
    DateOfbirth: "05/06/1982",
  },
  {
    id: 2,
    FirstName: "Foulen",
    LastName: "Ben foulen",
    email: "foulen@gmail.com",
    DateOfbirth: "01/01/1990",
  },
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
                    primary={`${appointment.FirstName} ${appointment.LastName}`}
                    secondary={`${appointment.DateOfbirth} ${appointment.email}`}
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
                {`${selectedAppointment.FirstName} ${selectedAppointment.LastName}`}
              </Typography>
              <Divider />
              <Typography variant="subtitle1">
                Date of birth: {selectedAppointment.DateOfbirth}
              </Typography>
              <Typography variant="subtitle1">Email: {selectedAppointment.email}</Typography>
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
