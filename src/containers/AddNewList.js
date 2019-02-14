import { connect } from 'react-redux';
import { add_todo_list } from '../actions/todolistsActions';
import AddNewList from '../components/AddNewList';
import uuid from 'uuid';
import moment from 'moment';
import { DAY_MONTH_YEAR } from '../constants/formatting';

const mapStateToProps = state => {
    return{
        listid: uuid(),
        title: '',
        todos: {},
        created: moment.utc().format(DAY_MONTH_YEAR),
        modified: moment.utc().format(DAY_MONTH_YEAR)
    }
};

const mapDispatchToProps = dispatch => {
    return{ 
        add_todo_list: todolist => dispatch(add_todo_list(todolist))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewList);