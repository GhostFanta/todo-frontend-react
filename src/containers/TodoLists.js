import {connect} from 'react-redux'
import TodoLists from '../components/TodoLists'
import {
  add_todo_list,
  delete_todo_list,
  update_todo_list,
  set_active_todo_list,

} from '../actions/todolistsActions'

import {
  fetchTodolists
} from '../actions/apiactions'

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  // include todolists and activelistid
  todolists: state.todolists
});

const mapDispatchToProps = dispatch => ({
  add_todo_list: (todolist) => dispatch(add_todo_list(todolist)),
  delete_todo_list: (listid) => dispatch(delete_todo_list(listid)),
  update_todo_list: (listid, title) => dispatch(update_todo_list(listid, title)),

  set_active_todolist: (listid) => dispatch(set_active_todo_list(listid)),

  fetch_data: ()=>dispatch(fetchTodolists())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists)
