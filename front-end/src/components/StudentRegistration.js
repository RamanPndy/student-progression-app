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

class StudentRegistration extends Component {

    state = {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
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
          username : this.state.username,
          firstname : this.state.firstname,
          lastname : this.state.lastname,
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
    
      showLoginComponent = () => {
          this.props.showLoginComponent()
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
                        id="username"
                        label="Username"
                        className={classes.textField}
                        value={this.state.firstname}
                        onChange={this.handleChange('username')}
                        margin="normal"
                        variant="outlined"
                        type="text"
                        />
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
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        className={classes.textField}
                        margin="normal"
                        />
                        <Button variant="outlined" size="medium" color="primary" className={classes.submitBtn} onClick={this.handleRegistration}>
                            Register
                        </Button>
                        <Button variant="outlined" size="medium" color="primary" className={classes.submitBtn} onClick={this.showLoginComponent}>
                            Login
                        </Button>
                    </form>        
                </Paper>
            </div>
        )
    }
}

StudentRegistration.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(StudentRegistration);