import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/DeleteSweep';
const drawerWidth = 215;

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
        marginLeft: theme.spacing.unit * 2,
    },
    buttonList: {
        marginLeft: theme.spacing.unit * 1,
    },
});

class ActionBar extends Component {
    constructor(props, theme) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const buttonList = this.store.getState().buttonList;
        const { classes, anchor, open } = this.props;

        const buttonDrawer = buttonList.map(function(item){
            return <Button variant="outlined" size="small" color="primary" className={classes.button}>
            {item.name}
            <SaveIcon className={classes.rightIcon} />
            </Button>}
        )

        return (
            <AppBar className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open,
            })}
                style={{ paddingTop: 70, zIndex: 0, backgroundColor: "#eaeaea" }}
            >
                <Toolbar variant="dense" disableGutters={!open} style={{ height: 5, backgroundColor: "#ffff" }} >
                    <div className={classes.buttonList}>
                        <Button variant="outlined" size="small" color="primary" className={classes.button}>
                            Save
                            <SaveIcon className={classes.rightIcon} />
                        </Button>
                        <Button variant="outlined" size="small" color="primary" className={classes.button}>
                            Clean
                            <ClearIcon className={classes.rightIcon} />
                        </Button>

                        {buttonDrawer}
                    </div>

                </Toolbar>
            </AppBar>

        )
    }
}

export default withStyles(styles, { withTheme: true })(ActionBar)
