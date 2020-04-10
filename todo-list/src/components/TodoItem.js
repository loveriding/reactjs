import React, { Component } from 'react';
import './TodoItem.css'

// class TodoItem extends Component {
//     render() {
//         return(
//             <div className="TodoItem">
//                 <p>{ this.props.title }</p>
//             </div>
//         )
//     }
// }

function TodoItem(props) {
    const items  = props.item;
    let classItem = 'TodoItem';
    if(props.item.isComplete) {
        classItem += ' TodoItem-complete';
    }
    return(
        <div className={classItem}>
            <p>{ props.item.title }</p>
        </div>
    )
}

export default TodoItem;