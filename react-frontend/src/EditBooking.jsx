import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  Grid } from '@material-ui/core';
const EditBooking = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
   eventName: "",
   applicantName: "",
   applicantAddress: "",
   applicantMobileNo: "",
   applicantEmailId: "",
   eventAddress : "",
   eventDate : "",
   eventTime : "",
   noOfPeople : "",
   selectFoodCatogory : "",
   quantityOfVeg:"",
   quantityOfNonVeg  :"",
   selectAddOnCatogory : ""
  });

  const { eventName, applicantName, applicantAddress, applicantMobileNo, applicantEmailId,eventAddress,eventDate,eventTime,noOfPeople,selectFoodCatogory,quantityOfVeg,quantityOfNonVeg,selectAddOnCatogory } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    var id = localStorage.getItem('id');
    await axios.put(`http://localhost:8080/book/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
   var id = localStorage.getItem('id');
    const result = await axios.get(`http://localhost:8080/book/delete/${id}`);
    setUser(result.data[0]);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)} style={{padding:"10px"}}>
          <Grid container >
              <Grid item xs={6}>
               
                <TextField
                   variant="outlined"
                   placeholder="Name: SS birthday Event"
                   label="Event Name"
                   name="eventName"
                   onChange={e => onInputChange(e)}
                   value={eventName} 
                   margin="normal"                              
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter applicant name"
                  label="Applicant Name"
                  name="applicantName"
                  onChange={e => onInputChange(e)}
                  value={applicantName}
                  margin="normal"
                  
                />
                <br />
                <TextField
                 variant="outlined"
                 placeholder="Enter applicant address"
                 label="Applicant Address"
                 name="applicantAddress"
                   onChange={e => onInputChange(e)}
                   value={applicantAddress} 
                   margin="normal" 
                 
                />
                <br />
                <TextField
                 variant="outlined"
                 placeholder="Enter applicant mobile no"
                 label="Applicant Mobile No"
                 name="applicantMobileNo"
                   onChange={e => onInputChange(e)}
                   value={applicantMobileNo} 
                   margin="normal"
                 
                />
                <br />
                <TextField
                  variant="outlined"
                 placeholder="Enter Your applicant email-id"
                 label="Applicant EmailId"
                 name="applicantEmailId"
                   onChange={e => onInputChange(e)}
                   value={applicantEmailId} 
                   margin="normal"
                 
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Address: Coimbatore"
                  label="Enter Event Address"
                  name="eventAddress"
                  onChange={e => onInputChange(e)}
                  value={eventAddress} 
                  margin="normal"                
                  
                />
                <br />
                <TextField
                  variant="outlined"
                  label="Enter date of the event"
                  type="date"
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  name="eventDate"
                  onChange={e => onInputChange(e)}
                  value={eventDate}                                  
                />
                           
          
              </Grid>
              <Grid item xs={6}>
              <TextField
                  
                  variant="outlined"
                  id="time"
                  label="Enter event time"
                  type="time"
                  name="eventTime"
                  onChange={e => onInputChange(e)}
                  value={eventTime}
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  
                />
<br/>
                <TextField
                  variant="outlined"
                  placeholder="Enter the number of people"
                  label="No of People"
                  name="noOfPeople"
                  onChange={e => onInputChange(e)}
                  value={noOfPeople}
                  margin="normal"
                  
                />
                <br />
                
            <TextField
              variant="outlined"
              placeholder="Enter Your FoodCatogory"
              label="Food Catogory"
              name="selectFoodCatogory"
              onChange={e => onInputChange(e)}
              value={selectFoodCatogory}
              margin="normal"
              
            />
             <br />
                
                <TextField
                  variant="outlined"
                  placeholder="Enter quantity of Nonveg items"
                  label="Quantity of Nonveg Items"
                  name="quantityOfNonVeg"
                  onChange={e => onInputChange(e)}
                  value={quantityOfNonVeg}
                  margin="normal"
                  
                /><br/> <TextField
                placeholder="Enter quantity of Veg items"
                label="Quantity of Veg Items"
                name="quantityOfVeg"
                onChange={e => onInputChange(e)}
                value={quantityOfVeg} 
                margin="normal"
                variant="outlined"
              /> <br />
                  
              <TextField
                variant="outlined"
                placeholder="Enter ADD ons"
                label="ADD ons"
                name="selectAddOnCatogory"
                onChange={e => onInputChange(e)}
                value={selectAddOnCatogory}
                margin="normal"
                
              />
                 
              </Grid>
            </Grid>
     
            <Button
              color="primary"
              variant="contained"            
            >Update</Button>
        </form>
      </div>
    </div>
  );
};

export default EditBooking;
