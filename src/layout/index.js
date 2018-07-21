import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';


import TopBar from '../components/topBar';
import MailFolderListItems from '../components/leftPanel';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

class Layout extends Component {
  constructor(props, _theme) {
    super(props);
    const newLocal = this.newMethod_1();
    this.store = newLocal;
    this.resourceList = this.newMethod();
  }

  newMethod_1() {
    return this.props.store;
  }

  newMethod() {
    return this.props.resourceList;
  }

  render() {
    const { classes, children } = this.props;

    return (
      newFunction(classes, children)

    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(Layout);

function newFunction(classes, children) {
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <TopBar />
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <MailFolderListItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
