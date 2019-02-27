import {
  TOGGLE_COMPLETED,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_INCOMPLETED,
  REMOVE_COMPLETED,

  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM,

  DELETE_TODO_LIST,
  UPDATE_TODO_LIST,
  ADD_TODO_LIST,
  SET_ACTIVE_TODO_LIST,

  SUBMIT_REQUESTED,
  SUBMIT_SUCCESSFUL } from '../constants/actionType'
import moment from 'moment'

// List related
export const update_todo_list = (listid, title) => ({
  type: UPDATE_TODO_LIST,
  listid,
  title
})

export const delete_todo_list = (listid) => ({
  type: DELETE_TODO_LIST,
  listid
})

export const add_todo_list = (todolist) => ({
  type: ADD_TODO_LIST,
  title: todolist.title,
  todos: todolist.todos,
  created: moment.utc().format()
})

export const set_active_todo_list = (listid) => ({
  type: SET_ACTIVE_TODO_LIST,
  listid
})

// Visibility related
export const show_all = (listid) => ({
  type: SHOW_ALL,
  listid
})

export const show_completed = (listid) => ({
  type: SHOW_COMPLETED,
  listid
})

export const show_incompleted = (listid) => ({
  type: SHOW_INCOMPLETED,
  listid
})

export const remove_completed = (listid) => ({
  type: REMOVE_COMPLETED,
  listid
})

// Item related
export const add_todo_item = (listid, content) => ({
  type: ADD_TODO_ITEM,
  listid,
  content
})

export const delete_todo_item = (listid, todoid) => ({
  type: DELETE_TODO_ITEM,
  listid,
  todoid
})

export const update_todo_item = (listid, todoid, content) => ({
  type: UPDATE_TODO_ITEM,
  listid,
  todoid,
  content
})

export const toggle_completed = (listid, todoid) => ({
  type: TOGGLE_COMPLETED,
  listid,
  todoid
})
