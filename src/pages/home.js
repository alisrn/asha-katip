import React from 'react';
import { Typography } from '../../node_modules/@material-ui/core';
import { getButtonList } from "../actions";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    componentWillMount = () => {
        this.store.dispatch(getButtonList(null));
    }
    render() {
        return (
            <div>
                <Typography
                >
                    Welcome to ASHA KATİP.
                </Typography>
            </div>
        );
    }
}
export default Home;