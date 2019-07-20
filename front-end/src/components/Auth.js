import React, {Component} from 'react';
import PropType from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import StudentRegistration from './StudentRegistration';
import StudentLogin from './StudentLogin';

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

class Auth extends Component {

    state = {
        showReg: false,
        showLogin: true,
      };

    showLoginComponent = () => {
        this.setState({showLogin: true})
        this.setState({showReg: false})
    }

    showRegistrationComponent = () => {
        this.setState({showLogin: false})
        this.setState({showReg: true})
    }

    render () {
        return (
            <div>
                {this.state.showLogin ? <StudentLogin showRegistrationComponent={this.showRegistrationComponent} /> : undefined}
                {this.state.showReg ? <StudentRegistration showLoginComponent={this.showLoginComponent} /> : undefined}
            </div>
        )
    }
}

Auth.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(Auth);