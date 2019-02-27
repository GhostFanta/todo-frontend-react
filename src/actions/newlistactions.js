import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM
} from '../constants/actionType'

export const add_todo_item_new_list = (content) => ({
  type: ADD_TODO_ITEM,
  content
})

export const delete_todo_item = (todoid) => ({
  type: DELETE_TODO_ITEM,
  todoid
})

export const update_todo_item = (todoid, content) => ({
  type: UPDATE_TODO_ITEM,
  todoid,
  content
})
