// TaskList.js
import React from 'react';
import '../styles.css'

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task._id} className="task-item">
                    <div className='task-info'>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                    </div>
                    <div>
                        <span>{task.status}</span>
                        <button onClick={() => updateTask(task._id, 'Completed')}>Mark as Completed</button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
