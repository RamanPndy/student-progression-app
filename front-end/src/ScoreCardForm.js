import React, {Component} from 'react';
import PropType from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import API from '../API';

const APP_CONN = "http://127.0.0.1:8080"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 7,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width : '100%'
  },
  submitBtn : {
      marginTop:'20px',
      marginBottom:'20px',
      marginLeft:'50%',
      color:'#6728b7'
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
    color : '#236c98',
    textAlign : 'center',
  }
});

class ScoreCardForm extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        mobile:'',
        password: '',
        fieldErrorMsg : "All Fields are mandatory.",
        requireFields : []
      };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      
      handleRegistration = () => {
        let req_payload = {
          firstname : this.state.firstname,
          lastname : this.state.lastname,
          mobile : this.state.mobile,
          email : this.state.email,
          password : this.state.password
        }
        
        axios.post(APP_CONN + API.REGISTER, req_payload)
        .then (response => {
        })
        .catch(error => {
            console.log(error)
            alert (error)
        })
      } 

    render () {
        const {classes} = this.props;
        return (
            <div>
                <Paper elevation = {2} className={classes.root}>
                    <Typography variant="h4" gutterBottom align="center">
                        Student Registration Form
                    </Typography>
                    <Typography style = {{color:'red'}}>{this.state.fieldErrorMsg}</Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                        id="firstname"
                        label="First Name"
                        className={classes.textField}
                        value={this.state.firstname}
                        onChange={this.handleChange('firstname')}
                        margin="normal"
                        variant="outlined"
                        type="text"
                        />
                        <TextField
                        id="lastname"
                        label="Last Name"
                        className={classes.textField}
                        value={this.state.lastname}
                        onChange={this.handleChange('lastname')}
                        margin="normal"
                        variant="outlined"
                        type="text"
                        />
                        <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        />
                        <TextField
                        id="mobile"
                        label="Mobile"
                        className={classes.textField}
                        value={this.state.mobile}
                        onChange={this.handleChange('mobile')}
                        margin="normal"
                        variant="outlined"
                        type="text"
                        />
                        <TextField
                        id="password"
                        label="Password"
                        multiline
                        rowsMax="4"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        className={classes.textField}
                        margin="normal"
                        />
                        <Button variant="outlined" size="medium" color="primary" className={classes.submitBtn} onClick={this.handleRegistration}>
                            Submit
                        </Button>
                    </form>        
                </Paper>
            </div>
        )
    }
}

ScoreCardForm.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(ScoreCardForm);