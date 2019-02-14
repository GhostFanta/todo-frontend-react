import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {withStyles, Typography} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const style = {
  item: {
    width: '30%',
  },
  content: {
    fontSize: 16,
    display: 'inline',
    width: '100'
  }
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onDbClick = this.onDbClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
    this.onToggleEditing = this.onToggleEditing.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      isEditting: false,
      content: this.props.content,
    };
  }

  // Db click to trigger editing mode
  onDbClick = () => {
    this.setState({editing: true})
  };

  onBlur = e => {
    const text = this.state.content.trim();
    if (text.length === 0) {
      this.props.delete_todo_item(this.props.listid, this.props.todoid);
    } else {
      this.props.update_todo_item(this.props.listid, this.props.todoid, text);
    }
    this.setState({editting: false});
  };

  onTextChange(e) {
    const text = e.target.value;
    this.setState({content: text});
  }

  onKeyPress(e) {
    const text = this.state.content.trim();
    if (e.key === 'Enter') {
      e.preventDefault();
      if (text.length === 0) {
        this.props.delete_todo_item(this.props.listid, this.props.todoid);
      } else {
        this.props.update_todo_item(this.props.listid, this.props.todoid, text);
      }
      this.setState({editting: false});
    }
  }

  handleDelete() {
    this.props.delete_todo_item(this.props.listid, this.props.todoid);
  }

  onToggleCompleted() {
    this.props.toggle_completed(this.props.listid, this.props.todoid);
  }

  onToggleEditing() {
    this.setState({editting: !this.editting});
  }

  render() {
    const {classes} = this.props;
    return (
      <ul>
        <Checkbox checked={this.props.completed} onClick={this.onToggleCompleted}/>
        {!this.state.editting ? (
          <Typography onDoubleClick={this.onToggleEditing} className={classes.content}>{this.props.content}</Typography>
        ) : (
          <TextField
            type='text'
            placeholder='Enter your todo'
            value={this.state.content}
            onBlur={this.onBlur}
            onChange={this.onTextChange}
            onKeyPress={this.onKeyPress}
          >{this.state.content}</TextField>
        )
        }
        <Button onClick={this.handleDelete}><DeleteOutlined></DeleteOutlined></Button>
      </ul>
    )
  }
}

export default withStyles(style)(TodoItem);