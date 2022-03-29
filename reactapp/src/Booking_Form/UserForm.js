import React, { Component } from 'react';
import Page_1 from './Page_1';
import Page_2 from './Page_2';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    eventName: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobileNo: '',
    applicantEmailId: '',
    eventAddress: '',
    eventDate:'',
    eventTime:'',
    noOfPeople:'',
    selectFoodCatogory:'',
    quantityOfVeg:'',
    quantityOfNonVeg:'',
    selectAddOnCatogory:''
    
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { eventName, applicantName, applicantAddress, applicantMobileNo, applicantEmailId, eventAddress,eventDate,eventTime,noOfPeople,selectFoodCatogory,quantityOfVeg,quantityOfNonVeg,selectAddOnCatogory } = this.state;
    const values = { eventName, applicantName, applicantAddress, applicantMobileNo, applicantEmailId, eventAddress,eventDate,eventTime,noOfPeople,selectFoodCatogory,quantityOfVeg,quantityOfNonVeg,selectAddOnCatogory };

    switch (step) {     
      case 1:
        return (
          <Page_1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Page_2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
