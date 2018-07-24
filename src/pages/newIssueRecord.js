import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import PartNo from "../components/part";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import swal from 'sweetalert';

import { getButtonList, actionBarClick } from "../actions";

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

const initialState = {Customer_Id:""}

class Quality extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.buttonList = [{ name: "Save", icon: "Save" },
    { name: "Clean", icon: "DeleteSweep" }];

    this.actionClicked = "";
    this.state = {
      ...initialState
    };
  }

  componentWillMount = () => {
    this.store.dispatch(getButtonList(this.buttonList));
    this.isNewRecord = (this.store.getState().isNewRecord);
  }

  componentWillUpdate = (nextProps) => {
    if (this.actionClicked !== nextProps.store.getState().actionClicked) {
      switch (nextProps.store.getState().actionClicked) {
        case 'Save':
          this.onSaveClick()
          break;

        case 'Clean':
          this.onCleanClick()
          break;

        default:
          break;
      };
      this.actionClicked = nextProps.store.getState().actionClicked;
      this.store.dispatch(actionBarClick(""))

    }

  }

  onCleanClick = () => {
    this.setState(initialState)
/*     this.props.history.push("/")
    this.props.history.push("/new-issue-record") */
    
  }

  onSaveClick = () => {
    fetch("http://asha-katip.azurewebsites.net/api/issue", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "Customer_Id": this.state.Customer_Id,
        "Project_Id": this.state.Project_Id,
        "Partnumber_Id": 1,
        "Problem_Date": this.state.Problem_Date,
        "Description": "ilk deneme",
        "Location_Id": this.state.Location_Id,
        "Grade_Id": "A",
        "Resp_Dept_Id": 1,
        "Request_Date": "01-01-2018",
        "Target_Date": "01-01-2018",
        "Qty_In_1_Month": 1,
        "Qty_In_3_Month": 2,
        "Insert_User_Id": 1
      })
    })
      .then((response) => response.json()
      )
      .then(response => {
        if (response.ok) {
          swal("Login successful.", "Kayıt işlemi başarılı!", "success")
        } else {
          this.setState({ loginClicked: false })
          swal(response.message, "Kayıt işlemi gerçekleştirilemedi!", "error");
        }

      }
      )

  }


  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.store.getState().actionClicked);
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
                  <InputLabel htmlFor="Customer_Id">Customer</InputLabel>
                  <NativeSelect
                    name="Customer_Id"
                    value={this.state.Customer_Id}
                    onChange={e => this.onChangeHandler(e)}
                    input={<Input name="Customer_Id" id="Customer_Id" />}
                  >
                    <option value="" />
                    <option value={1}>Hyundai</option>
                    <option value={2}>Ford</option>
                    <option value={3}>Mobis</option>
                  </NativeSelect>
                  <FormHelperText>Please select customer</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="Project_Id">Project</InputLabel>
                  <NativeSelect
                    name="Project_Id"
                    onChange={e => this.onChangeHandler(e)}
                    value={this.state.Project_Id}
                    input={<Input name="Project_Id" id="Project_Id" />}
                  >
                    <option value="" />
                    <option value={1}>Hyundai Project</option>
                    <option value={2}>Ford Project</option>
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
                    onChange={e => this.onChangeHandler(e)}
                    name="Problem_Date"
                    value={this.state.Problem_Date}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </form>
              </div>

              <div style={{ display: "flex" }}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="Location_Id">Location</InputLabel>
                  <NativeSelect
                    value={this.state.Location_Id}
                    onChange={e => this.onChangeHandler(e)}
                    name="Location_Id"
                    input={<Input name="Location_Id" id="Location_Id" />}
                  >
                    <option value={0} />
                    <option value={1}>Customer</option>
                    <option value={2}>Internal</option>
                  </NativeSelect>
                  <FormHelperText>Please select location</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grade">Grade</InputLabel>
                  <NativeSelect
                    value={this.state.grade}
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
              className={classes.textField}
              margin="normal"
            />
          </Paper>
        </div>

        {!this.isNewRecord ?
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
          :
          <Fragment />
        }
      </div>
    );
  }
}

export default withStyles(styles)(Quality);
