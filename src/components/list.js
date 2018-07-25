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
  },
  table: {
    minWidth: 700,
  },
});



class List extends React.Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
    this.data = this.props.data;
    this.state = {
      selectedList: [],
      rowCount: this.data.length,
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
      this.setState({ selectedList: this.data.map(n => n.id) })
      return;
    }
    this.setState({ selectedList: [] })
  }

  render() {
    const { classes } = this.props;
    const { rowCount } = this.state
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
            {this.data.map(n => {
              return (
                <TableRow key={n.id}
                  hover={true}
                  role="checkbox"
                  onClick={e => this.handleClick(e, n.id)}
                  selected={this.isSelected(n.id)}
                  aria-checked={this.isSelected(n.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={this.isSelected(n.id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.ProblemDate}
                  </TableCell>
                  <TableCell >{n.Customer}</TableCell>
                  <TableCell >{n.Project}</TableCell>
                  <TableCell >{n.PartNumber}</TableCell>
                  <TableCell >{n.ResponsibleDepartment}</TableCell>
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
