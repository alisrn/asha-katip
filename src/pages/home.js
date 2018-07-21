import React from 'react';
import { Typography } from '../../node_modules/@material-ui/core';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    render(){
        return(
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