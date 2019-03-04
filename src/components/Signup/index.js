import React, {Component} from 'react'
import {Grid, Typography, TextField, Button, Paper, withStyles} from '@material-ui/core'

const styles = {
  root: {
    marginTop: '5%',
    padding: '5%'
  },
  container: {
    padding: '5%',
    '& label':{
      margin: '%5',
      padding: '%5'
    }
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props)
  }

  onSignup() {

  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <Grid className={classes.root}
              container
              direction="column-reverse"
              justify="center"
              alignItems="center">
          <form>
            <Paper className={classes.container}>
              <Typography>Email:</Typography>
              <TextField></TextField>
              <Typography>Password:</Typography>
              <TextField type={'password'}></TextField>
              <Typography>Repeat Password:</Typography>
              <TextField type={'password'}></TextField>
              <p/>
              <Button onClick={this.onSignup}>Signup</Button>
            </Paper>
          </form>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SignUp)
