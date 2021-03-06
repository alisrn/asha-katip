import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '../../node_modules/@material-ui/core';

import { getButtonList } from "../actions";


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.unit * 2,
  },
  table: {
    minWidth: 700,
  },
});



class List extends React.Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
    this.state = {
      selectedList: [],
      //rowCount: this.props.data.length,
    }
 }

  componentWillUpdate = () => {
  }

  handleClick = (e, id) => {
    const { selectedList } = this.state;
    const selectedIndex = selectedList.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedList, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedList.slice(1));
    } else if (selectedIndex === selectedList.length - 1) {
      newSelected = newSelected.concat(selectedList.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedList.slice(0, selectedIndex),
        selectedList.slice(selectedIndex + 1)
      );
    }
    if (newSelected.length !== 1)
      this.props.buttonList[1].disabled = true;
    else
      this.props.buttonList[1].disabled = false;
    this.store.dispatch(getButtonList(this.props.buttonList));
    this.setState({ selectedList: newSelected });
  }

  isSelected = id => this.state.selectedList.indexOf(id) !== -1;

  onSelectAll = () => {
    if (this.state.selectedList.length === 0) {
      this.setState({ selectedList: this.props.data.map(n => n.Id) })
      return;
    }
    this.setState({ selectedList: [] })
  }

  render() {
    const { classes } = this.props;
    const  rowCount  = this.props.data.length;
    const numSelected = this.state.selectedList.length

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" >
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={numSelected === rowCount && rowCount !== 0}
                  onClick={this.onSelectAll}
                />
              </TableCell>
              <TableCell>Problem Date</TableCell>
              <TableCell >Customer</TableCell>
              <TableCell >Project</TableCell>
              <TableCell >Part Number</TableCell>
              <TableCell >Responsible Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(n => {
              return (
                <TableRow key={n.Id}
                  hover={true}
                  role="checkbox"
                  onClick={e => this.handleClick(e, n.Id)}
                  selected={this.isSelected(n.Id)}
                  aria-checked={this.isSelected(n.Id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={this.isSelected(n.Id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.Problem_Date}
                  </TableCell>
                  <TableCell numeric>{n.Customer_Id}</TableCell>
                  <TableCell numeric>{n.Project_Id}</TableCell>
                  <TableCell numeric>{n.Partnumber_Id}</TableCell>
                  <TableCell numeric>{n.Resp_Dept_Id}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
