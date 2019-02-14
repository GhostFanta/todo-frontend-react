import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    margin: 10,
  },
  delete: {
    width: '100%',
    '&:hover': {
      backgroundColor: 'red',
    }
  },
  created: {
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.01071em',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  modified: {
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.01071em',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  }
});

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTodolist = this.onDeleteTodolist.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  onDeleteTodolist(listid) {
    this.props.delete_todo_list(listid);
  }

  setActive(listid) {
    this.props.set_active_todolist(listid)
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container className={classes.root} spacing={16}>
          <Grid container justify='center' spacing={8}>
            {
              Object.keys(this.props.todolists.todolists).map((listid) => {
                return (
                  <Card key={listid} className={classes.paper}>
                    <Link style={{textDecoration: 'none'}} to={{pathname: `/todolist/${listid}`}}>
                      <CardActionArea>
                        <CardContent onClick={() => this.setActive(listid)}>
                          <Typography gutterBottom variant='h5' component='h2'>
                            <p>{this.props.todolists.todolists[listid].title}</p>
                            <p className={classes.created}>created: {this.props.todolists.todolists[listid].created}</p>
                            <p className={classes.modified}>last
                              modified: {this.props.todolists.todolists[listid].modified}</p>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <Button className={classes.delete}
                            onClick={() => this.onDeleteTodolist(listid)}><DeleteOutlined/></Button>
                  </Card>
                )
              })
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TodoLists);