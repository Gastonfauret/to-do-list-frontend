import { useState } from 'react';

export default function useAddNewTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addNewTask = async (task) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error('Failed to add a new Task');
            }

            const data = await response.json();
            setTasks((prevTasks) => [...prevTasks, data]);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { tasks, addNewTask, loading, error };
}
