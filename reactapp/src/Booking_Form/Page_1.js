import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DialogTitle, Grid } from '@material-ui/core';


export class Page_1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleFormSubmit = e =>{
    window.location.href= "/getBookedTheme";
  }
  

  render() {
    const { values, handleChange } = this.props;
    const alinkTag = {
      color: "#3f51b5",
      cursor: "pointer"  
    };
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle><h3>BIRTHDAY EVENT BOOKING</h3>
            <a onClick={e => this.handleFormSubmit(e)} style={alinkTag}>Go to Booking List</a>
            </DialogTitle>
            <Grid container >
              <Grid item xs={6}>
               
                <TextField
                   variant="outlined"
                   placeholder="Name: SS birthday Event"
                   label="Event Name"
                   onChange={handleChange('eventName')}
                   defaultValue={values.eventName}                    
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter applicant name"
                  label="Applicant Name"
                  onChange={handleChange('applicantName')}
                  defaultValue={values.applicantName}
                  margin="normal"
                  
                />
                <br />
                <TextField                
                 variant="outlined"
                 placeholder="Enter applicant address"
                 label="Applicant Address"
                 onChange={handleChange('applicantAddress')}
                 defaultValue={values.applicantAddress}
                 margin="normal"
                 
                />
                <br />
                <TextField
                 variant="outlined"
                 placeholder="Enter applicant mobile no"
                 label="Applicant Mobile No"
                 onChange={handleChange('applicantMobileNo')}
                 defaultValue={values.applicantMobileNo}
                 margin="normal"
                 
                />
                <br />
                <TextField
                  variant="outlined"
                 placeholder="Enter Your applicant email-id"
                 label="Applicant EmailId"
                 onChange={handleChange('applicantEmailId')}
                 defaultValue={values.applicantEmailId}
                 margin="normal"
                 
                />
                <br />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="Address: Coimbatore"
                  label="Enter Event Address"
                  onChange={handleChange('eventAddress')}
                  defaultValue={values.eventAddress}
                  
                  
                />
                <br />
                <TextField
                  variant="outlined"
                  label="Enter date of the event"
                  type="date"
                  defaultValue="2222-22-62"
                  onChange={handleChange('eventDate')}
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  
                />
                <br />
                <TextField
                  
                  variant="outlined"
                  id="time"
                  label="Enter event time"
                  type="time"
                  defaultValue="12:30"
                  onChange={handleChange('eventTime')}
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter the number of people"
                  label="No of People"
                  onChange={handleChange('noOfPeople')}
                  defaultValue={values.noOfPeople}
                  margin="normal"
                  
                />
                <br />
              </Grid>
            </Grid>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Next Page</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Page_1;
