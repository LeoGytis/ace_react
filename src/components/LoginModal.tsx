'use client';
import { handleLogin } from '@/lib/handleLogin';
import apiService from '@/services/apiService';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import FormInput from '../form/FormInput';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginModal = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'a@a.lt',
      password: 'a',
    },
  });

  const onSubmit = async (formData: LoginFormInputs) => {
    try {
      const response = await apiService
        .postAuth('/api/login_check', formData)
        .then((res) => res.json());

      if (response.refresh_token_expiration) {
        handleLogin(response);
        toast.success('Login successful!');
      } else {
        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => error
        );
        tmpErrors.forEach((error) => toast.error(error));
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm font-medium">Sign in</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md w-full p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-semibold">Login</Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 "
          >
            <FormInput
              name="email"
              control={control}
              label="Email"
              placeholder="Enter your email"
            />
            <FormInput
              name="password"
              control={control}
              label="Password"
              placeholder="Enter your password"
            />

            <Button type="submit" className="bg-black">
              Login
            </Button>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginModal;
