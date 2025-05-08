import React, { useEffect } from 'react';
import TaskList from '../components/tasks/TaskList';
import { useTasks } from '../context/TaskContext';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { tasks, loading, error, fetchTasks } = useTasks();
  const { user } = useAuth();

  // Calculate task stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-500 mb-1">Total Tasks</h3>
          <p className="text-3xl font-bold text-gray-900">{totalTasks}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-500 mb-1">Pending</h3>
          <p className="text-3xl font-bold text-amber-500">{pendingTasks}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-500 mb-1">In Progress</h3>
          <p className="text-3xl font-bold text-blue-500">{inProgressTasks}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-500 mb-1">Completed</h3>
          <p className="text-3xl font-bold text-green-500">{completedTasks}</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
        <TaskList />
      </div>
    </div>
  );
};

export default DashboardPage;