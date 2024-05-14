import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { api_rout_url } from '../utils1/Constants';
import { useAlert } from 'react-alert';

const Taskpage = () => {
    const selectUserId = (state) => state.auth.userId;
    const userId = useSelector(selectUserId);
    const [tasks, setTasks] = useState([]);
    const alert = useAlert()

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const authToken = sessionStorage.getItem('userId');
                if (!authToken) {
                    throw new Error('User is not authenticated');
                }

                const response = await fetch(`${api_rout_url}/api/auth/tasks/${authToken}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.tasks) {
                        setTasks(data.tasks);
                    }
                } else {
                    throw new Error('Failed to fetch tasks');
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
                alert.error("Error fetching tasks");
            }
        };

        fetchTasks();
    }, [userId]);

    return (
        <div className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6">
                <FontAwesomeIcon icon={faTasks} /> {"Tasks For you "}
            </h1>
       
          { tasks.length ===0 ? <p className='text-red-500'>No Tasks Found for you </p> :  <div>
                <h2 className="text-lg font-bold mb-3">{}</h2>
                <table className="w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 py-2 px-4">Title</th>
                            <th className="border border-gray-400 py-2 px-4">Description</th>
                            <th className="border border-gray-400 py-2 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                                 <tr key={task._id} className="border border-gray-400">
                                    
                                     <td className="border border-gray-400 py-2 px-4">{task.title}</td>
                                     <td className="border border-gray-400 py-2 px-4">{task.description}</td>
                                     <td className="border border-gray-400 py-2 px-4">{task.status}</td>
                                 </tr>
                             ))}
                     </tbody>

                </table>
            </div>}
        </div>
    );
};

export default Taskpage;
