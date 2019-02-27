import React from 'react'
import { Component } from 'react'
import uuid from 'uuid'
import TodoItem from '../TodoItem'
import { Paper, Button, Typography, TextField, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '80%',
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -40%)'
  }
}

class AddNewList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      todos: {},
      editting: false
    }
    this.onAddNewTodo = this.onAddNewTodo.bind(this)
    this.delete_todo_item = this.delete_todo_item.bind(this)
    this.toggle_completed = this.toggle_completed.bind(this)
    this.update_todo_item = this.update_todo_item.bind(this)
  }

  onAddNewTodo (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (e.target.value !== '') {
        this.setState({
          ...this.state.todos,
          [uuid()]: {
            content: e.target.value,
            completed: false
          }

        })
      }
    }
  }

  delete_todo_item (listid, todoid) {

  }

  toggle_completed (listid, todoid) {

  }

  update_todo_item (listid, todoid, content) {

  }

  render () {
    const { classes } = this.props
    return (
      <div className='add_todo_list'>
        <Paper className={classes.root}>
          {
            this.editting || this.state.title === ''
              ? <TextField placeholder='input your todolist title here' onKeyPress={this.onAddNewTodo}></TextField>
              : <Typography></Typography>
          }
          <p></p>
          <TextField placeholder='input new todo' onKeyPress={this.onAddNewTodo}></TextField>
          {
            Object.keys(this.state.todos).map((todoid) => {
              return <TodoItem
                id={todoid}
                key={todoid}
                content={this.state.todos[todoid].content}
                completed={this.state.todos[todoid].completed}
                delete_todo_item={this.delete_todo_item}
                toggle_completed={this.toggle_completed}
                update_todo_item={this.update_todo_item}
              >
              </TodoItem>
            })
          }
          <Paper><Button>Save</Button></Paper>

        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(AddNewList)
