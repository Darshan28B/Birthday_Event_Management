import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleFormSubmit = e =>{
   
    e.preventDefault();
    // let nextStep = this.props;
    let formData = new FormData();
    formData.append('eventName', this.props.values.eventName);
    formData.append('applicantName', this.props.values.applicantName);
    formData.append('applicantAddress', this.props.values.applicantAddress);
    formData.append('applicantMobileNo', this.props.values.applicantMobileNo);
    formData.append('applicantEmailId', this.props.values.applicantEmailId);
    formData.append('eventAddress', this.props.values.eventAddress);
    formData.append('eventDate', this.props.values.eventDate);
    formData.append('eventTime', this.props.values.eventTime);
    formData.append('noOfPeople', this.props.values.noOfPeople);
    formData.append('selectFoodCatogory', this.props.values.selectFoodCatogory);
    formData.append('quantityOfVeg', this.props.values.quantityOfVeg);
    formData.append('quantityOfNonVeg', this.props.values.quantityOfNonVeg);
    formData.append('selectAddOnCatogory', this.props.values.selectAddOnCatogory);
    formData.append('status', 1);    
    axios({
        method: 'post',
        url: 'http://localhost:8080/book/add',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {      
      if(response.status === 200){
        alert("successfully Booked Event Detail.");
        window.location.href="/getBookedTheme";
        // nextStep.nextStep();
       }else{
        alert("Failed to book event details...!");
      }
    })
    .error(function (response) {
      alert("Failed to book event details...!");
    });
  }

   render() {
    const {
      values: { eventName, applicantName, applicantAddress, applicantMobileNo, applicantEmailId, eventAddress, eventDate, eventTime, noOfPeople, selectFoodCatogory, quantityOfVeg, quantityOfNonVeg, selectAddOnCatogory }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Event Name" secondary={eventName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicant Name" secondary={applicantName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicant Address" secondary={applicantAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicant Mobile Number" secondary={applicantMobileNo} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicant EmailId" secondary={applicantEmailId} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Event Address" secondary={eventAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Event Date" secondary={eventDate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Event Time" secondary={eventTime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Number of People" secondary={noOfPeople} />
              </ListItem>
              <ListItem>
                <ListItemText primary="FoodCatogory" secondary={selectFoodCatogory} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Quantity Of Veg" secondary={quantityOfVeg} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Quantity Of NonVeg" secondary={quantityOfNonVeg} />
              </ListItem>
              <ListItem>
                <ListItemText primary="AddOn Catogory" secondary={selectAddOnCatogory} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Previous Page</Button>

            <Button
              color="primary"
              variant="contained"
              // onClick={this.continue}
              onClick={e => this.handleFormSubmit(e)}
            >Book the event</Button>

            {/* <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Contact" /> */}


          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
