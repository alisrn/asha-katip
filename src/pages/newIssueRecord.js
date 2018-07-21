import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import PartNo from "../components/part";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 150
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 150
  },
  menu: {
    width: 200
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

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
      <div>
        <div style={{ display: "flex" }}>
          <Paper
            className={classes.root}
            elevation={0}
            style={{ width: "60%" }}
          >
            <div>
              <div style={{ display: "flex", flex: 2 }}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="customer">Customer</InputLabel>
                  <NativeSelect
                    value={this.state.customer}
                    onChange={this.handleChange("customer")}
                    input={<Input name="customer" id="customer" />}
                  >
                    <option value="" />
                    <option value={10}>Hyundai</option>
                    <option value={20}>Ford</option>
                    <option value={30}>Mobis</option>
                  </NativeSelect>
                  <FormHelperText>Please select customer</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="project">Project</InputLabel>
                  <NativeSelect
                    value={this.state.project}
                    onChange={this.handleChange("project")}
                    input={<Input name="project" id="project" />}
                  >
                    <option value="" />
                    <option value={10}>Hyundai Project</option>
                    <option value={20}>Ford Project</option>
                  </NativeSelect>
                  <FormHelperText>Please select project</FormHelperText>
                </FormControl>

                <PartNo />

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

              <div style={{ display: "flex" }}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="location">Location</InputLabel>
                  <NativeSelect
                    value={this.state.location}
                    onChange={this.handleChange("location")}
                    input={<Input name="location" id="location" />}
                  >
                    <option value="" />
                    <option value={10}>Customer</option>
                    <option value={20}>Internal</option>
                  </NativeSelect>
                  <FormHelperText>Please select location</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grade">Grade</InputLabel>
                  <NativeSelect
                    value={this.state.grade}
                    onChange={this.handleChange("grade")}
                    input={<Input name="grade" id="grade" />}
                  >
                    <option value="" />
                    <option value={10}>A</option>
                    <option value={20}>B</option>
                    <option value={30}>C</option>
                  </NativeSelect>
                  <FormHelperText>Please select grade</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel style={{ width: 250 }} htmlFor="Resp">
                    Responsible Department
                  </InputLabel>
                  <NativeSelect
                    style={{ width: 250 }}
                    value={this.state.resp}
                    onChange={this.handleChange("resp")}
                    input={<Input name="resp" id="resp" />}
                  >
                    <option value="" />
                    <option value={10}>ASHA1</option>
                    <option value={20}>ASHA2</option>
                    <option value={30}>STA</option>
                  </NativeSelect>
                  <FormHelperText>Please select grade</FormHelperText>
                </FormControl>
              </div>

              <div style={{ display: "flex" }}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="ReqDate"
                    label="Request Date"
                    type="date"
                    defaultValue=""
                    helperText="Please select request date"
                    margin="normal"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </form>

                <TextField
                  id="qty1"
                  label="Q'ty of Last Month"
                  value={this.state.qty1}
                  onChange={this.handleChange("qty1")}
                  type="normal"
                  defaultValue="1"
                  helperText="Please select quantity"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id="qty2"
                  label="Q'ty of Last 3 Month"
                  value={this.state.qty2}
                  onChange={this.handleChange("qty2")}
                  type="number"
                  defaultValue="1"
                  helperText="Please select quantity"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </div>
          </Paper>

          <Paper
            className={classes.root}
            elevation={0}
            style={{ width: "20%" }}
          >
            <TextField
              id="description"
              label="Description"
              style={{ width: 500 }}
              multiline
              rowsMax="13"
              value={this.state.description}
              onChange={this.handleChange("description")}
              className={classes.textField}
              margin="normal"
            />
          </Paper>
        </div>

        <Paper
          className={classes.root}
          elevation={0}
          style={{ width: "83.5%" }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <form className={classes.container} noValidate>
                <TextField
                  id="RecvDate1"
                  label="Receive Date-1"
                  type="date"
                  defaultValue=""
                  helperText="Please select receive date"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>

              <form className={classes.container} noValidate>
                <TextField
                  id="RecvDate2"
                  label="Receive Date-2"
                  type="date"
                  defaultValue=""
                  helperText="Please select receive date"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>

              <form className={classes.container} noValidate>
                <TextField
                  id="RecvDate3"
                  label="Receive Date-3"
                  type="date"
                  defaultValue=""
                  helperText="Please select receive date"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>

              <form className={classes.container} noValidate>
                <TextField
                  id="SCustDate"
                  label="Sending Date"
                  type="date"
                  defaultValue=""
                  helperText="Please select sending date"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>

              <form className={classes.container} noValidate>
                <TextField
                  id="Awaiting"
                  label="Awaiting Date"
                  type="date"
                  defaultValue=""
                  helperText="Please select awaiting date"
                  margin="normal"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>
            </div>

            <div>
              <FormControl className={classes.formControl}>
                <InputLabel style={{ width: 250 }} htmlFor="dupdate">
                  Document Update
                </InputLabel>
                <NativeSelect
                  style={{ width: 250 }}
                  value={this.state.dupdate}
                  onChange={this.handleChange("dupdate")}
                  input={<Input name="DocumentUpdate" id="dupdate" />}
                >
                  <option value="" />
                  <option value={10}>YES</option>
                  <option value={20}>NO</option>
                </NativeSelect>
                <FormHelperText>Please select document update</FormHelperText>
              </FormControl>

              <TextField
                id="multiline-static"
                label="Document Update Description"
                multiline
                style={{ width: 500 }}
                helperText="Please enter document update description"
                rows="4"
                defaultValue=""
                className={classes.textField}
                margin="normal"
              />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Quality);
