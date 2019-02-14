import React, {Component} from 'react';
import { withStyles, Typography, TextField } from '@material-ui/core';

const styles = {
    root:{

    }
}

class EditableItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editting: false,
        }
    }

    render(){
        return(
            <div>
            {
                this.state.editting ? 
                <Typography>{this.props.content}</Typography>:
                <TextField value></TextField>
            }
            </div>
        )
    }
}


export default withStyles(styles)(EditableItem);