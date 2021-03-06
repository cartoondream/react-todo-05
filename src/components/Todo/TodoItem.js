import React from 'react';

const TodoItem = ({id, task, removeTask}) => {
    return (
      <div className="row todo-item">
        <div className="col-8">
            <p>{task}</p>
        </div>
        <div className="col-2">
          <p>
            <span className="deleteBtn" onClick={() => removeTask(id)}>
              X
            </span>
          </p>
        </div>
       
      </div>
    )
  }

  export default TodoItem;