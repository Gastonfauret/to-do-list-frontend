import { useState } from 'react';
import useGetAllTasks from './useGetAllTask';

export default function useDeleteTask() {
    const { fetchTasks } = useGetAllTasks();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteTask = async (taskId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/task/${taskId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete the task');
            }

            await fetchTasks()

            setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { tasks, deleteTask, loading, error };
}
