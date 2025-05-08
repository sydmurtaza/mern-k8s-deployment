import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { User } from 'lucide-react';

interface ProfileFormData {
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const { user, loading } = useAuth();
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    // In a real app, we would update the user profile
    console.log('Update profile:', data);
    alert('Profile update functionality would be implemented in a full version.');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account settings</p>
      </div>

      <Card className="p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
          <div className="mb-4 sm:mb-0 sm:mr-6 p-4 bg-blue-100 rounded-full text-blue-600">
            <User className="h-12 w-12" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500 mt-1">User ID: {user._id}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                id="name"
                label="Name"
                type="text"
                error={errors.name?.message}
                {...register('name', { required: 'Name is required' })}
              />

              <Input
                id="email"
                label="Email"
                type="email"
                disabled={true}
                error={errors.email?.message}
                {...register('email', { required: 'Email is required' })}
              />
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                isLoading={loading}
                disabled={loading}
              >
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;