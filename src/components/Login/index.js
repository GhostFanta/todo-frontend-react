import React, {Component} from 'react';
import { withStyles, Paper, Typography, TextField, Button } from '@material-ui/core';

const styles = {
    root:{

    }
};

class Login extends Component{

    render(){

        const { classes } = this.props;

        return(
            <div>
                <Paper className={classes.root}>
                    <Typography>Email:</Typography>
                    <TextField></TextField>
                    <Typography>Password:</Typography>
                    <TextField></TextField>
                    <Button>Login</Button>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Login);