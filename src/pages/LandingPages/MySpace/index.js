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
import bgImage from "../../../assets/images/bgimage.jpg";
import MKBox from "../../../components/MKBox";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

const appointments = [
  { id: 1, date: "2023-05-12", time: "10:00 AM", location: "New York" },
  { id: 2, date: "2023-05-13", time: "2:00 PM", location: "Los Angeles" },
  { id: 3, date: "2023-05-14", time: "4:00 PM", location: "Chicago" },
];

function NotificationCenter() {
  const classes = useStyles();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <>
      <DefaultNavbar routes={routesNavbar} />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          height: 10,
          backgroundSize: "1500px 800px",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={4} style={{ marginLeft: "120px" }}>
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
                      primary={appointment.date}
                      secondary={`${appointment.time} @ ${appointment.location}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            {selectedAppointment ? (
              <Paper className={classes.paper}>
                <Typography variant="h6">
                  Appointment Details for {selectedAppointment.date}
                </Typography>
                <Divider />
                <Typography variant="subtitle1">Time: {selectedAppointment.time}</Typography>
                <Typography variant="subtitle1">
                  Location: {selectedAppointment.location}
                </Typography>
              </Paper>
            ) : (
              <Paper className={classes.paper}>
                <Typography variant="h6">No appointment selected</Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default NotificationCenter;
