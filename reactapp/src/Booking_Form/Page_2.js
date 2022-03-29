import React, { Component } from 'react';
import { Dialog, Grid } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export class Page_2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <Grid container >
              <Grid item xs={6}>
            <h2>FOOD TYPE</h2>
            
          
            <TextField
              variant="outlined"
              placeholder="Enter Your selectFoodCatogory"
              label="Select Food Catogory"
              onChange={handleChange('selectFoodCatogory')}
              defaultValue={values.selectFoodCatogory}
              margin="normal"
              
            />
            <br />
            <TextField
              placeholder="Enter quantity of Veg items"
              label="Quantity of Veg Items"
              onChange={handleChange('quantityOfVeg')}
              defaultValue={values.quantityOfVeg}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              placeholder="Enter quantity of Nonveg items"
              label="Quantity of Nonveg Items"
              onChange={handleChange('quantityOfNonVeg')}
              defaultValue={values.quantityOfNonVeg}
              margin="normal"
              variant="outlined"
            />
            <br />
            </Grid>
            <Grid item xs={6}>
            <h2>ADD ons</h2>
            <TextField
              placeholder="Enter Your ADD ons"
              label="ADD ons"
              onChange={handleChange('eventAddress')}
              defaultValue={values.selectAddOnCatogory}
              margin="normal"
              variant="outlined"
            />
            <br />
            </Grid>
            </Grid>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Previous Page</Button>
            <br />
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

export default Page_2;
