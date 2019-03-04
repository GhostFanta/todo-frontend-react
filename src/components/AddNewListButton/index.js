import React, {Component} from 'react';
import {Button} from '@material-ui/core'

import styles from './style.scss'

class AddNewListButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.btn_add}>Add</button>
      </div>
    )
  }
}

export default AddNewListButton;