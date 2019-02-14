import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../components/Header'
import TodoLists from './TodoLists';
import TodoList from './TodoList';
import AddNewList from './AddNewList';
import NotFound from '../components/Notmatch';
import Signup from '../components/Signup';
import Login from '../components/Login';

class App extends Component {
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
    );
  }
}

export default App;