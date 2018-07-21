import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TrackIcon from '@material-ui/icons/TrackChanges';
import ProjectIcon from '@material-ui/icons/Schedule';
import CustomerIcon from '@material-ui/icons/Contacts';
import ReportIcon from '@material-ui/icons/Report';
import SettingIcon from '@material-ui/icons/Settings';
import AdminIcon from '@material-ui/icons/Security';
import ProfileIcon from '@material-ui/icons/Person';
import NextIcon from '@material-ui/icons/NavigateNext';


const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: "#B9CCEC",
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    '&:focus': {
      backgroundColor: "#B9CCEC",
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class mailFolderListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeOpen: false,
      isQualityOpen: false,
      isProjectOpen: false,
      isReportOpen: false,
      isAdminOpen: false,
      isSettingOpen: false,
      clickedItem: ""
    }
  }


  clickHandler = (e) => {
    switch (e.target.innerText) {
      
      case "Home":
        this.setState(state => ({
          isHomeOpen: !state.isHomeOpen
        }))
        break;

      case "Quality Track":
        this.setState(state => ({
          isQualityOpen: !state.isQualityOpen
        }))
        break;

      case "Projects":
        this.setState(state => ({
          isProjectOpen: !state.isProjectOpen
        }))
        break;

      case "Reports":
        this.setState(state => ({
          isReportOpen: !state.isReportOpen
        }))
        break;

      case "Settings":
        this.setState(state => ({
          isAdminOpen: !state.isAdminOpen
        }))
        break;

      case "Administration":
        this.setState(state => ({
          isSettingOpen: !state.isSettingOpen
        }))
        break;

      default:
        break;
    };
    this.setState({
      clickedItem: e.target.innerText
    })

  }


  render() {
    const { classes } = this.props;
    return (

      < MenuList>
        <MenuItem key = {1} className={classes.menuItem} component={Link} to="/" exact onClick={this.clickHandler.bind(this)} >
          <ListItemIcon id={1} >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText id={1} primary="Home" style = {{zIndex:2, width:"100%"}}/>
        </MenuItem>
        }

        <MenuItem key = {2} className={classes.menuItem} component={Link} to="/quality" exact onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <TrackIcon />
          </ListItemIcon>
          <ListItemText primary="Quality Track" />
        </MenuItem>

        <MenuItem className={classes.menuItem} component={Link} to="/part" exact onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <TrackIcon />
          </ListItemIcon>
          <ListItemText primary="Part" />
        </MenuItem>

        <MenuItem className={classes.menuItem} onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          <ListItemIcon style={this.state.open ? { transform: 'rotate(90deg)' } : {}} >
            <NextIcon />
          </ListItemIcon>
        </MenuItem>
        {this.state.isProjectOpen ?
          <MenuItem name = "asdasd" className={classes.nested} component={Link} to="/" exact >
            <ListItemIcon>
              <CustomerIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </MenuItem>
          :
          <Divider />
        }

        <MenuItem key = {4} className={classes.menuItem} onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </MenuItem>
        <Divider />
        <MenuItem key = {5} className={classes.menuItem} onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem key = {6} className={classes.menuItem} onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <AdminIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
        </MenuItem>
        <MenuItem key = {7} className={classes.menuItem} component={Link} to="/login" exact onClick={this.clickHandler.bind(this)} >
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
      </MenuList>
    )
  }
}


mailFolderListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(mailFolderListItems);
