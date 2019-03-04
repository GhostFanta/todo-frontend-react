import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../components/Header'
import TodoLists from './TodoLists'
import TodoList from './TodoList'
import AddNewList from './AddNewList'
import NotFound from '../components/Notmatch'
import Signup from '../containers/Signup'
import Login from '../containers/Login'
import {fetchTodolists, fetchTodolistIfNeeded, invalidateTodolists} from "../actions/apiactions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentWillMount() {
    const {dispatch} = this.props
    dispatch(fetchTodolists())
  }

  componentDidUpdate() {
    const {dispatch} = this.props
    dispatch(fetchTodolistIfNeeded())
  }

  handleRefreshClick(e) {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(invalidateTodolists())
    dispatch(fetchTodolistIfNeeded())
  }

  render() {
    return (
      <div className="App">
        <Header useremail={this.props.useremail}/>
        <Switch>
          <Route path='/' exact component={TodoLists}/>
          <Route path='/addnewlist' component={AddNewList}/>
          <Route path={`/todolist/:listid`} component={TodoList}/>
          <Route path={`/login`} component={Login}/>
          <Route path={`/signup`} component={Signup}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null)(App)