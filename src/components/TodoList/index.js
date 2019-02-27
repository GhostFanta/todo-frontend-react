import React from 'react'
import { Component } from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Typography, TextField, withStyles } from '@material-ui/core'
import { withRouter } from 'react-router'

import TodoItem from '../TodoItem'
import Filter from '../Filter'
import { SHOW_ALL, SHOW_COMPLETED } from '../../constants/actionType'

const styles = {
  root: {
    width: '730px',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -40%)'
  },
  title: {
    fontSize: 30
  }
}

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.onAddButtonClick = this.onAddButtonClick.bind(this)
    this.onAddTodoChange = this.onAddTodoChange.bind(this)
    this.onEnterClick = this.onEnterClick.bind(this)
    this.onDoubleClickTitle = this.onDoubleClickTitle.bind(this)

    this.state = {
      addingTodo: false,
      edittingTitle: false,
      edittingTodo: false,
      titleToBeChanged: ''
    }
  }

  componentWillReceiveProps () {
    const { listid } = this.props.match.params
    this.props.set_active_todolist(listid)
  }

  onAddButtonClick () {
    if (this.state.todoTobeAdded !== '') {
      this.props.add_todo_item(this.props.listid, this.state.todoTobeAdded)
      this.setState({ todoTobeAdded: '' })
    }
  }

  onEnterClick (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      this.onAddButtonClick()
    }
  }

  onTitleChangeFinshed (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      this.setState({ edittingTitle: false })
      if (e.target.value !== '') {
        this.props.update_todo_list(e.target.value)
      }
    }
  }

  onDoubleClickTitle () {
    this.setState({ edittingTitle: true })
  }

  onAddTodoChange (e) {
    this.setState({ todoTobeAdded: e.target.value })
  }

  render () {
    const { classes } = this.props
    const visualTodos = this.props.visibility === SHOW_ALL
      ? this.props.todos
      : this.props.visibility === SHOW_COMPLETED
        ? Object.keys(this.props.todos).reduce((filtered, key) => {
          if (this.props.todos[key].completed === true) {
            filtered[key] = this.props.todos[key]
          }
          return filtered
        }, {})
        : Object.keys(this.props.todos).reduce((filtered, key) => {
          if (this.props.todos[key].completed === false) {
            filtered[key] = this.props.todos[key]
          }
          return filtered
        }, {})
    return (
      <div className='TodoList'>
        <Paper className={classes.root}>
          {
            this.state.edittingTitle ? (
              <TextField value={this.props.title} onBlur={this.updateTitleFinished}/>
            ) : (
              <Typography className={classes.title} onDoubleClick={this.onDoubleClickTitle}
                value={this.props.title}/>
            )
          }
          <TextField onChange={this.onAddTodoChange} onKeyPress={this.onEnterClick}
            placeholder='Input incoming task' value={this.state.todoTobeAdded}/>

          <Button onClick={this.onAddButtonClick}>Add</Button>
          {
            Object.keys(visualTodos).map((todoid) => {
              return <TodoItem key={todoid}
                todoid={todoid}
                listid={this.props.listid}
                content={this.props.todos[todoid].content}
                completed={this.props.todos[todoid].completed}
                delete_todo_item={this.props.delete_todo_item}
                update_todo_item={this.props.update_todo_item}
                toggle_completed={this.props.toggle_completed}
              >
              </TodoItem>
            })
          }

          <Filter
            listid={this.props.listid}
            show_completed={this.props.show_completed}
            show_incompleted={this.props.show_incompleted}
            show_all={this.props.show_all}
            remove_completed={this.props.remove_completed}
            submit={this.props.submit}
          />
        </Paper>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(TodoList))
