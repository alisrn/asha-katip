import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        backgroundColor: "#2A4F6E",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    button: {
        margin: theme.spacing.unit * 3 ,
      },
});

class ActionBar extends Component {
    constructor(props, theme) {
        super(props);
        this.store = this.props.store;
    }

    render() {

        const { classes, anchor, open} = this.props;

        return (
            <AppBar className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open,
            })}
                style={{ paddingTop: 70, zIndex: 0, backgroundColor: "#eaeaea" }}
            >
                <Toolbar variant="dense" disableGutters={!open} style={{ height: 5, backgroundColor: "#ffff" }} >
                    <Button variant="outlined" size="small" color="primary" className={classes.button}>
                        Save
             <SaveIcon className={classes.rightIcon} />
                    </Button>
                </Toolbar>
            </AppBar>

        )
    }
}

export default withStyles(styles, { withTheme: true })(ActionBar)
