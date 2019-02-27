import { connect } from 'react-redux'
import {
  update_todo_list,

  add_todo_item,
  delete_todo_item,
  update_todo_item,
  toggle_completed,

  show_all,
  show_incompleted,
  show_completed,
  remove_completed, set_active_todo_list
} from '../actions/todolistsActions'

import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
  return {
    listid: ownProps.match.params.listid,
    title: state.todolists.todolists[ownProps.match.params.listid].title,
    todos: state.todolists.todolists[ownProps.match.params.listid].todos,
    visibility: state.todolists.todolists[ownProps.match.params.listid].visibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update_todo_list: (listid) => dispatch(update_todo_list(listid)),
    add_todo_item: (listid, content) => dispatch(add_todo_item(listid, content)),
    delete_todo_item: (listid, todoid) => dispatch(delete_todo_item(listid, todoid)),
    update_todo_item: (listid, todoid, content) => dispatch(update_todo_item(listid, todoid, content)),
    toggle_completed: (listid, todoid) => dispatch(toggle_completed(listid, todoid)),

    show_all: (listid) => dispatch(show_all(listid)),
    show_incompleted: (listid) => dispatch(show_incompleted(listid)),
    show_completed: (listid) => dispatch(show_completed(listid)),
    remove_completed: (listid) => dispatch(remove_completed(listid)),

    set_active_todolist: (listid) => dispatch(set_active_todo_list(listid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
