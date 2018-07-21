import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import PartNo from "../components/part";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 200
  },
  menu: {
    width: 200
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex"
  }
});

const customer = [
  {
    value: "1",
    label: "Ford"
  },
  {
    value: "2",
    label: "Hyundai"
  },
  {
    value: "3",
    label: "Mobis"
  },
  {
    value: "4",
    label: "Isuzu"
  },
  {
    value: "5",
    label: "Agco"
  }
];

const location = [
  {
    value: "1",
    label: "Customer"
  },
  {
    value: "2",
    label: "Internal"
  }
];

const project = [
  {
    value: "1",
    label: "IA"
  },
  {
    value: "2",
    label: "GB"
  }
];

class Quality extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  state = {
    customer: "",
    location: "",
    description: "",
    project: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <div>
          <div style={{ display: "flex" }} >
            <TextField
              id="customer"
              select
              label="Customer"
              className={classes.textField}
              value={this.state.customer}
              onChange={this.handleChange("customer")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select Customer"
              margin="normal"
            >
              {customer.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="project"
              select
              label="Project"
              className={classes.textField}
              value={this.state.project}
              onChange={this.handleChange("project")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select project name"
              margin="normal"
            >
              {project.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <PartNo />
          </div>
          <div style={{ display: "flex" }} >
            <TextField
              id="location"
              select
              label="Location"
              className={classes.textField}
              value={this.state.location}
              onChange={this.handleChange("location")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select location"
              margin="normal"
            >
              {location.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Problem Date"
                type="date"
                defaultValue=""
                helperText="Please select problem date"
                margin="normal"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
          </div>
        </div>
        <div>
          <TextField
            id="description"
            label="Description"
            multiline
            rows="4"
            defaultValue=""
            className={classes.textField}
            helperText="Please enter description"
            margin="normal"
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Quality);
