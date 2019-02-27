import React, {Component} from 'react'
import {Paper, Button, TextField, Typography, withStyles} from '@material-ui/core'

const styles = {
  root: {}
}

class Login extends Component {
  render() {
    const {classes} = this.props

    return (
      <div>
        <Paper className={classes.root}>
          <Typography>Email:</Typography>
          <TextField></TextField>
          <Typography>Password:</Typography>
          <TextField></TextField>
          <p/>
          <Button>Login</Button>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
