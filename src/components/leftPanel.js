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
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
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
      open: false,
    }
    this.resourceList = this.props.resourceList
  }


  clickHandler = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    const { classes } = this.props;
    return (

      < MenuList>
        <MenuItem className={classes.menuItem} component={Link} to="/" exact >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>

        <MenuItem className={classes.menuItem} component={Link} to="/quality" exact >
          <ListItemIcon>
            <TrackIcon />
          </ListItemIcon>
          <ListItemText primary="Quality Track" />
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
        {this.state.open ?
          <MenuItem className={classes.nested} component={Link} to="/" exact >
            <ListItemIcon>
              <CustomerIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </MenuItem>
          :
          <Divider />
        }

        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </MenuItem>
        <Divider />
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem className={classes.menuItem} >
          <ListItemIcon>
            <AdminIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/login" exact >
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
