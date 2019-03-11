import {connect} from 'react-redux'
import Login from '../components/Login'
import {login} from '../actions/authactions'
import {invalidateTodolists} from "../actions/apiactions";

const mapStateToProps = state => ({
  isLoggingin: state.isLoggingin,
  authtoken: state.authtoken
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  invalidateTodolists: () => dispatch(invalidateTodolists())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
