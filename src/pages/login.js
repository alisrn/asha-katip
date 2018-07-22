import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '../assets/account_circle_grey.png'
import swal from 'sweetalert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { userLogin } from '../actions';
/* import AccountCircle from '../icons/account_circle_grey.png'
 */
export default class Login extends React.Component {
    styles = {
        accountCircle: {
            marginTop: 40,
            width: 120,
            opacity: 0.65
        },
        containerPaper: {
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 320,
        },
        userItem: {
            marginTop: 10,
            width: 200
        },
        passItem: {
            marginTop: 20,
            width: 200
        },
        buttonItem: {
            marginTop: 40,
            width: 200,
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            userInfo: {},
            isLoggedIn: false,
            loginClicked: false,
        }
        this.store = this.props.store;
        this.loginInfo = {};
    }

    onLoginClick = (e) => {
        this.setState({
            loginClicked: true
        })
        fetch("http://asha-katip.azurewebsites.net/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        })
            .then((response) => response.json()
            )
            .then(response => {
                if (response.ok) {
                    swal("Login successful.", "Welcome " + this.state.username + "!", "success")
                        .then(this.props.history.push("/"))
                        .then(
                            this.store.dispatch(userLogin(response.ok))
                        )

                } else {
                    this.setState({ loginClicked: false })
                    swal(response.message, "Username or password is wrong!", "error");
                }

            }
            )
            .catch((error) => {
                console.error(error);
            })
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignUpClick = () => {
        this.props.history.push("/signup");
    }

    render() {
        return (
            <Paper style={{
                marginTop: 100,
            }} >
                {
                    this.state.loginClicked ?
                        <div style={{ alignContent: "center", alignItems: "center", zIndex: 1 }} >
                            <CircularProgress style={{ position: "absolute", marginTop: 200, marginLeft: 140 }} />
                        </div>
                        :
                        <Fragment />
                }

                <div style={this.styles.containerPaper}>
                    <img style={this.styles.accountCircle} src={AccountCircle} alt="profile" />
                    <TextField style={this.styles.userItem}
                        name="username"
                        label="Username"
                        disabled={this.state.loginClicked}
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.username}
                    />
                    <TextField style={this.styles.passItem}
                        name="password"
                        label="Password"
                        type="password"
                        disabled={this.state.loginClicked}
                        onChange={e => this.onChangeHandler(e)}
                        value={this.state.password}
                    />
                    <Button style={this.styles.buttonItem}
                        size="large"
                        variant="raised"
                        disabled={this.state.loginClicked}
                        color="primary"
                        onClick={this.onLoginClick.bind(this)}>
                        Login
                </Button>
                    <Button
                        size="large"
                        variant="raised"
                        disabled={this.state.loginClicked}
                        color="secondary"
                        onClick={this.onSignUpClick}
                        style={{ marginBottom: 55, marginTop: 30, width: 200 }}>
                        Sign Up
                </Button>
                </div>

            </Paper>
        )
    }

}