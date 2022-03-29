import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();  
  };
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  //
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Successfully Submitted Booking Details </h1>
            <a href="/users/123" class="active">Michael</a>

            <Link to='/getBookedTheme'>Go to Aboutpage</Link>
            {/* <a href={getBookedTheme}>LinkedIn handle</a> */}
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
