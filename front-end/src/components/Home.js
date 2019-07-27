import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Utils from '../Utils';
import Auth from './Auth';

class Home extends Component {
    state = {
        redirect: false,
        username : ''
      };

    componentDidMount = () => {
        let username = Utils.GETCOOKIE('loggedInUserName');
        if (!username){
            this.setState({redirect : true})
            this.setState({username : username})
        }
    }

    redirectToProfile = () => {
        if (this.state.redirect) {
          return (<Redirect to={{
            pathname: '/profile',
            username : this.state.username || this.state.email
        }} />)
        }
      }

render () {
  return (
    <div className="App">
      {this.redirectToProfile()}
      <AppBar>
        <Toolbar>
          <Typography variant="h6" align="center">Student Progression App</Typography>
        </Toolbar>
        <Auth />
      </AppBar>
    </div>
  );
    }
}

export default Home;