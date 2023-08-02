// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/tasks', taskData);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (taskId, status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { status });
      const updatedTasks = tasks.map((task) =>
        task._id === response.data._id ? response.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      )}
    </div>
  );
};

export default App;

