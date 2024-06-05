import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function TasksPage() {
  const { tasks, getTasks } = useTasks();
  // console.log(tasks)

  useEffect(() => {
    getTasks();
    console.log(tasks);
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </>
  );
}
