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
import PlusIcon from '@material-ui/icons/Add';


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
  nestedText: {
    marginLeft: -theme.spacing.unit * 2,
    fontSize:'8px'
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
  clickHome = () => {
    this.setState(state => ({
      isHomeOpen: !state.isHomeOpen,
      clickedItem: "Home"
    }))
  }

  clickQuality = () => {
    this.setState(state => ({
      isQualityOpen: !state.isQualityOpen,
      clickedItem: "Quality"
    }))
  }

  clickProject = () => {
    this.setState(state => ({
      isProjectOpen: !state.isProjectOpen,
      clickedItem: "Project"
    }))
  }

  clickNewIssueRecord = () => {
    this.setState(state => ({
      clickedItem: "NewIssueRecord"
    }))
  }

  render() {
    const { classes } = this.props;
    return (

      < MenuList>
        <MenuItem style={this.state.clickedItem === "Home" ? { backgroundColor: "#B9CCEC" } : {}} className={classes.menuItem} component={Link} to="/" exact onClick={this.clickHome.bind(this)} >
          <ListItemIcon >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" style={{ zIndex: 2, width: "100%" }} />
        </MenuItem>

        <MenuItem
          style={this.state.clickedItem === "Quality" ? { backgroundColor: "#B9CCEC" } : {}}
          className={classes.menuItem}
          component={Link} to="/quality" exact
          onClick={this.clickQuality.bind(this)} >
          <ListItemIcon>
            <TrackIcon />
          </ListItemIcon>
          <ListItemText primary="Quality Track" />
          <ListItemIcon style={this.state.isQualityOpen ? { transform: 'rotate(90deg)' } : {}} >
            <NextIcon />
          </ListItemIcon>
        </MenuItem>
        {this.state.isQualityOpen ?
          <MenuItem 
          style={this.state.clickedItem === "NewIssueRecord" ? { backgroundColor: "#B9CCEC" } : {}}
          className={classes.nested} component={Link} to="/new-issue-record" exact
          onClick={this.clickNewIssueRecord.bind(this)} >
            <ListItemIcon>
              <PlusIcon />
            </ListItemIcon>
            <ListItemText className={classes.nestedText} primary="New Issue Record" />
          </MenuItem>
          :
          <Divider />
        }

        <MenuItem className={classes.menuItem} onClick={this.clickProject.bind(this)} >
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          <ListItemIcon style={this.state.isProjectOpen ? { transform: 'rotate(90deg)' } : {}} >
            <NextIcon />
          </ListItemIcon>
        </MenuItem>
        {this.state.isProjectOpen ?
          <MenuItem  className={classes.nested} component={Link} to="/" exact >
            <ListItemIcon>
              <CustomerIcon />
            </ListItemIcon>
            <ListItemText className={classes.nestedText} primary="Customers" />
          </MenuItem>
          :
          <Divider />
        }

        <MenuItem className={classes.menuItem} >
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </MenuItem>
        <Divider />
        <MenuItem key={5} className={classes.menuItem} >
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem key={6} className={classes.menuItem} >
          <ListItemIcon>
            <AdminIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
        </MenuItem>
        <MenuItem key={7} className={classes.menuItem} >
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
