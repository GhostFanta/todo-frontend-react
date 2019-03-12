import {connect} from 'react-redux'
import Header from '../components/Header'
import {logout} from "../actions/authactions";

const mapStateToProps = state => {
  return {
    isLoggedin: state.auth.authtoken !== ''&&
    state.auth.authtoken !== null &&
    state.auth.authtoken !== undefined
  }
}

const mapDispatchToProps = dispath => {
  return{
    logout: () => dispath(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
