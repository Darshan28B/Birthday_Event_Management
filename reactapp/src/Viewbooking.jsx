import React, { Component } from "react"
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

export class Viewbooking extends Component {
   //initialize an object's state in a class
   constructor(props) {
      super(props)
      this.state = {
         data: []
      }
   }
   handleFormSubmit = result =>{
      console.log(result);
      localStorage.setItem('id', result);
     
     // window.location.href= "/EditBooking";
    }
   //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
   componentDidMount() {
      //get request
      axios.get('http://localhost:8080/book/list').then(res => {
         console.log(res);
         this.setState({ data: res.data });
      });

   }
   
   render() {
      const deleteUser = (id) => {
         axios.delete(`http://localhost/api-student/delete.php/${id}`).then(function(response){
        console.log(response.data);
         
     });
 }
 const edit = (id) => {
   
      localStorage.setItem('id', id);
      console.log(id);
      console.log(localStorage.getItem(id));
      window.location.href= "/EditBooking";

}
      return (

         <div className="maincontainer">

            <h1 className="mr-5 ml-5 mt-5">Booking List</h1>
            <div className="container mb-5 mt-5 text-left" style={{padding: "20px"}}>

               <table class="table table-bordered">
                  <thead>
                     <tr>
                        <th>Event ID</th>
                        <th>Event Name</th>
                        <th>Applicant Name</th>
                        <th>Applicant Address</th>
                        <th>Applicant EmailId</th>
                        <th>Applicant MobileNo</th>
                        <th>Event Date</th>
                        <th>Event Time</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.data.map((result) => {
                        return (

                           <tr>
                              <td>{result.id}</td>
                              <td>{result.eventName}</td>
                              <td>{result.applicantName}</td>
                              <td>{result.applicantAddress}</td>
                              <td>{result.applicantEmailId}</td>
                              <td>{result.applicantMobileNo}</td>
                              <td>{result.eventDate}</td>
                              <td>{result.eventTime}</td>
                              <td>
                              <Button color="secondary" variant="contained"  onClick={() => deleteUser(result.id)}>Delete</Button>&nbsp;&nbsp;
                              <Button color="primary" variant="contained"  onClick={() => edit(result.id)}>Edit</Button></td>

                           </tr>

                        )
                     })}


                  </tbody>
               </table>


            </div>

         </div>

      )
   }
};

export default Viewbooking;