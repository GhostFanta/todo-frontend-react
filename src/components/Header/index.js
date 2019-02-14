import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  logout() {
    this.props.logout();
  }

  render() {
    const {classes} = this.props;
    return (
      <div className='header'>
        <div>
          <Toolbar className={classes.root} position="static">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link className={classes.logo} to='/'>Todos</Link>
              &nbsp; For better management
            </Typography>
            {
              this.props.useremail ? (
                  <Button color="inherit" onClick={this.logout}>Logout</Button>
                )
                : (
                  <div>
                    <Button color="inherit"><Link color="inherit" to='/login'></Link>Login</Button>
                    <Button color="inherit"><Link color="inherit" to='/signup'></Link>Signup</Button>
                  </div>
                )
            }
          </Toolbar>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);