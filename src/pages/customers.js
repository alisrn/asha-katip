import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const customers = [
    {
        value: '1',
        label: 'FORD',
    },
    {
        value: '2',
        label: 'HAOS',
    },
    {
        value: '3',
        label: 'ISUZU',
    },
];

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        customer: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    id="customer"
                    select
                    label="Customer Name"
                    className={classes.textField}
                    value={this.state.customer}
                    onChange={this.handleChange('customer')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
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
                
            </div>
        );
    }
}
export default withStyles(styles)(Customer);