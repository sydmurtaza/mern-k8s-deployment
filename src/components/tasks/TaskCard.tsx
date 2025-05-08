import React from 'react';
import { Task } from '../../types';
import { CheckCircle, Edit, Trash2, Clock } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-amber-100 text-amber-800 border-amber-200',
    high: 'bg-red-100 text-red-800 border-red-200',
  };

  const statusColors = {
    'pending': 'bg-gray-100 text-gray-800 border-gray-200',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
    'completed': 'bg-teal-100 text-teal-800 border-teal-200',
  };

  return (
    <Card className="h-full transition-transform transform hover:scale-[1.01] hover:shadow-lg">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-grow">{task.title}</h3>
        <div className="flex space-x-1">
          <span className={`text-xs px-2.5 py-0.5 rounded-full ${priorityColors[task.priority]} border`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full ${statusColors[task.status]} border`}>
            {task.status === 'in-progress' 
              ? 'In Progress' 
              : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      {task.dueDate && (
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      )}
      
      <div className="flex justify-end gap-2 pt-2 mt-auto border-t border-gray-100">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:text-blue-700"
        >
          <Edit className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(task._id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4 mr-1" /> Delete
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;