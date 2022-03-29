import React from "react";
import "./styles.css";
import Booking from "./Booking";
import Viewbooking from "./Viewbooking";
import Logout from "./Logout";
import Header from "./Header";
import EditBooking from "./EditBooking";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: ""
  }
});


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/user/bookTheme" render={props => <Booking {...props} />} />
        <Route exact path="/getBookedTheme" render={props => <Viewbooking {...props} />} />
        <Route exact path="/login" render={props => <Logout {...props} />} />
        <Route exact path="/EditBooking" render={props => <EditBooking {...props} />} />
        
      </Switch>
    </div>
  );
}
