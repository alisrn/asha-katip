import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';

export default class signUpPage extends React.Component {
    styles = {
        accountCircle: {
            marginTop: 10,
        },
        containerPaper: {
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 320,
        },
        userItem: {
            marginTop: 20,
            width: 200
        },
        passItem: {
            marginTop: 20,
            width: 200
        },
        buttonItem: {
            marginTop: 40,
            width: 200,
            marginBottom: 40
        },
        workgroupItem: {
            marginTop: 20,
            width: 200
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            username: "",
            workgroup: "",
            email: "",
            password: "",
            rePassword: "",
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            rePasswordValid: false,
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
        this.validateField(e.target.name, e.target.value)
    }

    validateField = (name, value) => {
        switch (name) {
            case 'username':
                this.usernameValid = value.match(/^([\w.%+-]+)([\w-]+)+([\w]{2,})$/i);
                this.setState({
                    usernameValid: !this.usernameValid,
                })
                break;

            case 'email':
                this.emailValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value !== "");
                this.setState({
                    emailValid: !this.emailValid,
                })
                break;

            case 'password':
                this.passwordValid = value.length <= 6;
                this.setState({
                    passwordValid: this.passwordValid,
                })
                break;

            case 'rePassword':
                this.rePasswordValid = this.state.password === value
                this.setState({
                    rePasswordValid: !this.rePasswordValid
                })
                break;

            default:
                break;
        }

    }

    onNewUserSaveClick = () => {
        let newUserInfo;
        newUserInfo = {
            "name": this.state.name,
            "surname": this.state.surname,
            "username": this.state.username,
            "workgroup": this.state.workgroup,
            "email": this.state.email,
            "password": this.state.password
        };

        fetch("http://asha-katip.azurewebsites.net/api/validation?username=" + newUserInfo.username + '&email=' + newUserInfo.email, {
            method: 'GET',
        })
            .then((result) => result.json())
            .then(result => {
                if (!result.ok) {
                    swal("Error Occured!", result.message, "error");
                } else {
                    fetch("http://asha-katip.azurewebsites.net/api/signup", {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: newUserInfo.name,
                            surname: newUserInfo.surname,
                            username: newUserInfo.username,
                            workgroup: newUserInfo.workgroup,
                            email: newUserInfo.email,
                            password: newUserInfo.password
                        })
                    }
                    ).then((response) => response.json()
                    ).then(response => {
                        if (response.ok) {
                            swal("Successful", response.message, "success")
                            .then(this.props.history.push("/login"))
                        } else {
                            swal("Error", response.message, "error");
                        }
                    })
                        .catch((error) => {
                            console.error(error);
                        })
                }
            }).catch((error) => {
                console.error(error);
            }
            )
    }

    render() {
        return (
            <Paper style={this.styles.containerPaper} >
                <TextField style={this.styles.userItem}
                    label="Name"
                    name="name"
                    onChange={e => this.onChange(e)}
                    value={this.state.name}
                />

                <TextField style={this.styles.userItem}
                    label="Surname"
                    name="surname"
                    onChange={e => this.onChange(e)}
                    value={this.state.surname}
                />
                <TextField style={this.styles.userItem}
                    name="username"
                    label="Username"
                    error={this.state.usernameValid}
                    onChange={e => this.onChange(e)}
                    value={this.state.userName}
                    helperText={this.state.usernameValid ? "Please enter a valid username" : null}
                />
                <FormControl style={this.styles.workgroupItem} >
                    <InputLabel>Work Group</InputLabel>
                    <Select style={this.styles.workgroupItem}
                        value={this.state.workgroup}
                        onChange={e => this.onChange(e)}
                        inputProps={{
                            name: 'workgroup',
                            id: 'workgroup',
                        }}
                    >
                        <MenuItem value={1}>Kalite</MenuItem>
                        <MenuItem value={2}>Misafir</MenuItem>
                    </Select>
                </FormControl>

                <TextField style={this.styles.userItem}
                    name="email"
                    label="Email"
                    error={this.state.emailValid}
                    helperText={this.state.emailValid ? "Please enter a valid email" : null}
                    onChange={e => this.onChange(e)}
                    value={this.state.mail}
                />
                <TextField style={this.styles.passItem}
                    name="password"
                    label="Password"
                    type="password"
                    helperText={this.state.passwordValid ? "Password should be at least 7 characters." : null}
                    error={this.state.passwordValid}
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                />
                <TextField style={this.styles.passItem}
                    name="rePassword"
                    label="Re-enter Password"
                    type="password"
                    error={this.state.rePasswordValid}
                    helperText={this.state.rePasswordValid ? "Passwords should be a match." : null}
                    onChange={e => this.onChange(e)}
                    value={this.state.rePassword}
                />
                <Button style={this.styles.buttonItem}
                    size="large"
                    variant="raised"
                    color="secondary"
                    disabled={
                        this.state.emailValid ||
                        this.state.usernameValid ||
                        this.state.passwordValid ||
                        this.state.rePasswordValid ||
                        this.state.name === "" ||
                        this.state.surname === "" ||
                        this.state.username === "" ||
                        this.state.email === "" ||
                        this.state.password === "" ||
                        this.state.rePassword === "" ||
                        this.state.workgroup === ""
                    }
                    onClick={this.onNewUserSaveClick}>
                    Sign Up
                </Button>
            </Paper>
        )
    }
}