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
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

const appointments = [
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
  };

  const handleDeclineButtonClick = () => {
    // Handle declining the request here
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
