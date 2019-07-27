import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import PropType from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import API from '../API';
import Config from '../Config';

const APP_CONN = Config.BACKEND_HOST + ":" + Config.BACKED_PORT

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
      paddingLeft: '25px',
      color:'#6728b7',
      flot: 'right'
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

class StudentLogin extends Component {

    state = {
        email: '',
        password: '',
        fieldErrorMsg : "All Fields are mandatory.",
        requireFields : [],
        redirect: false
      };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      
    handleLogin = () => {
        let req_payload = {
          email : this.state.email,
          password : this.state.password
        }
        
        axios.post(APP_CONN + API.LOGIN, req_payload)
        .then (response => {
          let respData = response.data['result']
          if (respData === 200){
            this.setState({redirect: true})
          }
        })
        .catch(error => {
            console.log(error)
            alert (error)
        })
      } 

      redirectToProfile = () => {
        if (this.state.redirect) {
          return (<Redirect to={{
            pathname: '/profile',
            username : this.state.username || this.state.email
        }} />)
        }
      }
    
      showRegistrationComponent = () => {
          this.props.showRegistrationComponent()
      }

    render () {
        const {classes} = this.props;
        return (
            <div>
                {this.redirectToProfile()}
                <Paper elevation = {2} className={classes.root}>
                    <Typography variant="h4" gutterBottom align="center">
                        Student Login Form
                    </Typography>
                    <Typography style = {{color:'red'}}>{this.state.fieldErrorMsg}</Typography>
                    <form className={classes.container} noValidate autoComplete="off">
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
                        <Button variant="outlined" size="medium" color="primary" className={classes.submitBtn} onClick={this.handleLogin}>
                            Login
                        </Button>
                        <Button variant="outlined" size="medium" color="primary" className={classes.submitBtn} onClick={this.showRegistrationComponent}>
                            Register
                        </Button>
                    </form>        
                </Paper>
            </div>
        )
    }
}

StudentLogin.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(StudentLogin);