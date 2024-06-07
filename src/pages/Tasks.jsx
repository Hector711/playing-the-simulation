import { useEffect } from 'react';
import { useTasks } from '@/context/TaskContext';
import TaskCard from '@/pages/components/TaskCard';

export default function Tasks() {
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
