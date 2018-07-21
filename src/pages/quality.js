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
    paddingBottom: theme.spacing.unit * 2
  }
});

const customers = [
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

const prj = [
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
    prj: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <TextField
            id="customer"
            select
            label="Customer Name"
            className={classes.textField}
            value={this.state.customer}
            onChange={this.handleChange("customer")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your customer"
            margin="normal"
          >
            {customers.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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

          <TextField
            id="description"
            label="Description"
            placeholder=""
            multiline
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="prj"
            select
            label="Project"
            className={classes.textField}
            value={this.state.prj}
            onChange={this.handleChange("prj")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select project name"
            margin="normal"
          >
            {prj.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <div style = {{ display : "flex", verticalAlign: "Center" }} >
          
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Problem Date"
              type="date"
              defaultValue="2017-01-01"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </form>
          <PartNo />

          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Quality);
