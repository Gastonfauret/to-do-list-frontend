import React, { useState } from 'react';
import '../components/Addbtn.css'
import useAddNewTask from '../hooks/useAddNewTask';

export default function AddBtn() {
    const { addNewTask, loading, error } = useAddNewTask();

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = async () => {
        const newTask = {
            title: taskTitle,
            description: taskDescription,
        };

        await addNewTask(newTask);

        setTaskTitle('');
        setTaskDescription('');
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className='add-btn' onClick={() => setIsModalOpen(true)}>+</button>
            
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Añada nueva tarea:</h2>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Description" 
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                        <button onClick={handleAddTask} disabled={loading}>
                            {loading ? 'Adding...' : 'Añadir tarea'}
                        </button>
                        {error && <p>Error: {error.message}</p>}
                    </div>
                </div>
            )}
        </div>
    )
}


