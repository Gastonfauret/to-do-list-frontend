import React from 'react';
import useGetAllTasks from '../hooks/useGetAllTask';
import useDeleteTask from '../hooks/useDeleteTasks';
import '../components/TaskList.css';
import AddBtn from './AddBtn';

export default function TaskList() {
    const { tasks, fetchTasks, loading, error } = useGetAllTasks();
    const { deleteTask, loading: deleteLoading, error: deleteError } = useDeleteTask(fetchTasks);

    const handleDelete = async (taskId) => {
        await deleteTask(taskId);
    };

    if (loading || deleteLoading) {
        return <p>Loading...</p>;
    }

    // if (error || deleteError) {
    //     return <p>Error: {error?.message || deleteError?.message}</p>;
    // }

    return (
        <div className='task-container'>
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map(task => (
                    <div className='card-container' key={task.taskId}>
                        <li>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </li>
                        <button className='delete-task' onClick={() => handleDelete(task.taskId)}>Eliminar</button>
                    </div>
                ))}
            </ul>
            <AddBtn/>
        </div>
    );
}
