import React, {Component} from 'react';
import Cached from '@material-ui/icons/Cached';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import {Paper, withStyles, Button} from '@material-ui/core';

const styles = {
  root: {
    width: '50%'
  },
  removecompleted: {
    float: 'right',
    backgroundColor: 'red',
  },
  sync: {
    float: 'right',
    backgroundColor: 'green',
  }

}

class Filter extends Component {
  constructor(props) {
    super(props);
    this.onShowAll = this.onShowAll.bind(this);
    this.onShowCompleted = this.onShowCompleted.bind(this);
    this.onShowIncompleted = this.onShowIncompleted.bind(this);
    this.onRemoveCompleted = this.onRemoveCompleted.bind(this);
    this.onSync = this.onSync.bind(this);
  }

  onShowAll() {
    this.props.show_all(this.props.listid);
  }

  onShowCompleted() {
    this.props.show_completed(this.props.listid);
  }

  onShowIncompleted() {
    this.props.show_incompleted(this.props.listid);
  }

  onRemoveCompleted() {
    this.props.remove_completed(this.props.listid);
  }

  onSync() {
    this.props.submit(this);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Paper>
          <Button onClick={this.onShowAll}>ALL</Button>
          <Button onClick={this.onShowCompleted}>COMPLETED</Button>
          <Button onClick={this.onShowIncompleted}>INCOMPLETED</Button>
          <Button className={classes.sync} onClick={this.onSync}><Cached/>Persist to cloud</Button>
          <Button className={classes.removecompleted} onClick={this.onRemoveCompleted}><DeleteOutlined/> REMOVE
            COMPLETED</Button>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Filter);