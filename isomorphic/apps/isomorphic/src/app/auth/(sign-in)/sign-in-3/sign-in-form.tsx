// SignInForm.tsx
'use client';

import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { Input, Text, Button, Password, Switch } from 'rizzui';
import { useMedia } from '@core/hooks/use-media';
import { Form } from '@core/ui/form';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/validators/login.schema';
import { auth, firestore } from '../../../../../firebase'; // Adjust path as necessary

const initialValues: LoginSchema = {
  email: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      // Sign in with Firebase Authentication
      const userCredential = await auth.signInWithEmailAndPassword(data.email, data.password);
      const userId = userCredential.user?.uid;

      if (userId) {
        // Fetch user data from Firestore
        const userDoc = await firestore.collection('staff').doc(userId).get();
        const userData = userDoc.data();

        if (userData) {
          // Handle user data and role-based access here
          console.log('User data:', userData);
        }
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{ mode: 'onChange', defaultValues: initialValues }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Enter your email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? 'lg' : 'xl'}
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between lg:pb-2">
              <Switch label="Remember Me" {...register('rememberMe')} />
              <Link href={routes.auth.forgotPassword3} className="text-sm font-semibold text-gray-600 underline">Forgot Password?</Link>
            </div>
            <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'xl'}>Sign In</Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500">
        Don’t have an account? <Link href={routes.auth.signUp3} className="font-semibold text-gray-700">Sign Up</Link>
      </Text>
    </>
  );
}
