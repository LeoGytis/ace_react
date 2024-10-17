'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/Dialog';
import CustomButton from '@/components/ui/CustomButton';
import apiService from '@/services/apiService';
import { handleLogin } from '@/lib/handleLogin';
import useLoginModal from '@/hooks/useLoginModal';
import { Button } from '../ui/Button';

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignInModal = () => {
  const loginModal = useLoginModal();
  const [errors, setErrors] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: 'a@a.lt',
      password: 'a',
      rememberMe: false,
    },
  });

  const submitLogin: SubmitHandler<LoginFormInputs> = async (formData) => {
    if (!formData.email || !formData.password) {
      setErrors(['Please fill in all fields']);
      return;
    }

    try {
      const response = await apiService
        .postAuth('/api/login_check', formData)
        .then((res) => res.json());

      if (response.refresh_token_expiration) {
        loginModal.close();
        handleLogin(response);
      } else {
        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => error
        );
        setErrors(tmpErrors);
      }
    } catch (error) {
      setErrors(['Login failed. Please try again.']);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to the Acertip</h2>
      <form onSubmit={handleSubmit(submitLogin)} className="flex flex-col">
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email',
            },
          })}
          type="email"
          className="border rounded-xl p-3 mb-4"
          placeholder="Your e-mail address"
        />
        {formErrors.email && (
          <div className="p-4 mb-4 bg-red-400 text-white rounded-xl">
            {formErrors.email.message}
          </div>
        )}

        <input
          {...register('password', {
            required: 'Password is required',
          })}
          type="password"
          className="border rounded-xl p-3 mb-4"
          placeholder="Your password"
        />
        {formErrors.password && (
          <div className="p-4 mb-4 bg-red-400 text-white rounded-xl">
            {formErrors.password.message}
          </div>
        )}

        {errors.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-4 mb-4 bg-red-400 text-white rounded-xl"
          >
            {error}
          </div>
        ))}

        <div className="flex justify-between">
          <div>
            <input
              {...register('rememberMe')}
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>

        <CustomButton label="Login" />
        <div className="flex justify-end pt-3">
          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </form>
    </>
  );

  return (
    <Dialog open={loginModal.isOpen} onOpenChange={loginModal.close}>
      <DialogTrigger asChild>
        <Button className=" rounded-lg p-2 py-1">SignIN</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Please log in with your credentials.
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogClose asChild>
          <button className="absolute top-2 right-2">✕</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
