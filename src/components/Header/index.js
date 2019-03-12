import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    height: '100px',
    backgroundColor: '#263238',
    color: 'white',
    margin: 0
  },
  logo: {
    fontSize: '45px',
    fontFamily: 'Lato',
    color: 'white',
    textDecoration: 'none'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    color: 'white',
    textDecoration: 'none'
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logout()
  }

  render() {
    const {classes} = this.props
    return (
      <div className='header'>
        <div>
          <Toolbar className={classes.root} position="static">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link className={classes.logo} to='/'>Todos</Link>
              &nbsp; For better management
            </Typography>
            {
              this.props.isLoggedin ? (
                  <Button color="inherit" onClick={this.logout}>Logout</Button>
                )
                : (
                  <div>
                    <Link className={classes.menuButton} color="inherit" to='/login'><Button className={classes.menuButton}
                                                              color="inherit">Login</Button></Link>
                    <Link className={classes.menuButton} color="inherit" to='/signup'><Button className={classes.menuButton}
                                                               color="inherit">Signup</Button></Link>
                  </div>
                )
            }
          </Toolbar>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
