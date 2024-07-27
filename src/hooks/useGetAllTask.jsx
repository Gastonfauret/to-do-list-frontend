import { useState, useEffect } from 'react';

export default function useGetAllTasks() {
    const [tasks, setTasks] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
             setLoading(true);
        setError(null);
            try {
                const response = await fetch('http://localhost:3000/task', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }                   
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }

                const data = await response.json();                
                setTasks(data);
                setLoading(false);

            } catch (error) {
                setError(error);
                setLoading(false);                
            }
        }
        fetchTasks()
    }, []);

    return { tasks, loading, error };    
}