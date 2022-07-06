import React, {Component} from 'react';
import styles from './css/styles.module.css'

class Row extends Component {
    render() {
        return <div className={styles.row}>{this.props.children}</div>
    }
}

export default Row