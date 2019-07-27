import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LogOutIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';

import Utils from '../Utils';
import API from '../API';
import Config from '../Config';

const APP_CONN = Config.BACKEND_HOST + ":" + Config.BACKED_PORT

const drawerWidth = 240;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

class Profile extends Component {

  state = {
    open : false,
    redirect: false,
    username : ''
  };

  componentWillMount = () => {
    let username = this.props.location.username
    if (!username){
      this.setState({redirect: true})
    }
    else {
      this.setState({username : username})
      Utils.SETCOOKIE('loggedInUserName', username)
    }
  }

  redirectToHome = () => {
    if (this.state.redirect) {
      return (<Redirect to='/' />)
    }
  }

  handleDrawerOpen = () => {
    this.setState({open:true})
  };
  
  handleDrawerClose = () => {
    this.setState({open:false})
  };

  logoutUser = () => {
    Utils.DELETECOOKIE('loggedInUserName');
    this.redirectToHome();
  }

  render () {
  const classes = styles;
  return (
    <div className={classes.root}>
      {this.redirectToHome()}
      <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Welcome, {this.state.username}
          </Typography>
          <IconButton
            aria-haspopup="true"
            onClick={this.logoutUser}
            color="inherit"
          >
            <LogOutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

export default withStyles(styles)(Profile);