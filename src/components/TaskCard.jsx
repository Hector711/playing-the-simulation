import React from 'react';
import { useTasks } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className='tasks'>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
      <div>
        <button
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
