import {connect} from 'react-redux'
import Login from '../components/Login'
import {login} from '../actions/authactions'

const mapStateToProps = state => ({
  isLoggingin: state.isLoggingin,
  authtoken: state.authtoken
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
