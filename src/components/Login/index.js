import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Grid, Paper, Button, TextField, Typography, withStyles} from '@material-ui/core'

const styles = {
  root: {
    marginTop: '5%',
    padding: '5%'
  },
  container: {
    padding: '5%'
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {email: '', password: ''}
  }

  onLogin() {
    console.log(this.props)
    this.props.login(this.state.email, this.state.password)
    if(this.props.authtoken){
      this.props.history.push('/')
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
    console.log(this.state.email)
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
    console.log(this.state.password)
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
          <form onSubmit={this.onLogin}>
            <Paper className={classes.container}>
              <Typography>Email:</Typography>
              <TextField onChange={this.handleEmailChange}></TextField>
              <Typography>Password:</Typography>
              <TextField type={'password'} onChange={this.handlePasswordChange}></TextField>
              <p/>
              <Button onClick={this.onLogin}>Login</Button>
            </Paper>
          </form>
        </Grid>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Login))
