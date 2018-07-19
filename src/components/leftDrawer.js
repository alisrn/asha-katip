import React from 'react'
import { mailFolderListItems, otherMailFolderListItems } from '../components/leftPanel';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

export default () => {

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
})

    return (
        <Drawer variant="permanent"
        classes={{
          paper: styles.drawerPaper,
        }}>
        <div className={styles.toolbar} />
        <List>{mailFolderListItems}</List>
            <Divider />
        <List>{otherMailFolderListItems}</List>
        </Drawer>
    )
}