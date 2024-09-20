// SignUpForm.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Password, Switch, Button, Input, Text } from 'rizzui';
import { useMedia } from '@core/hooks/use-media';
import { Form } from '@core/ui/form';
import { routes } from '@/config/routes';
import { SignUpSchema, signUpSchema } from '@/validators/signup.schema';
import { auth, firestore } from '../../../../../firebase'; // Adjust path as necessary

const initialValues = {
  email: '',
  password: '',
  isAgreed: false,
  name: '',
  identificationNumber: '',
  role: 'staff' // Default role; you can adjust this as needed
};

export default function SignUpForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const [reset, setReset] = useState({ ...initialValues });

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    try {
      // Create user with Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(data.email, data.password);
      const userId = userCredential.user?.uid;

      if (userId) {
        // Save additional user data to Firestore
        await firestore.collection('staff').doc(userId).set({
          email: data.email,
          name: data.name,
          identificationNumber: data.identificationNumber,
          role: data.role,
        });
      }

      // Reset form values
      setReset({ ...initialValues });
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{ defaultValues: initialValues }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="text"
              size={isMedium ? 'lg' : 'xl'}
              label="Name"
              placeholder="Enter your name"
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              type="text"
              size={isMedium ? 'lg' : 'xl'}
              label="Identification Number"
              placeholder="Enter your ID number"
              {...register('identificationNumber')}
              error={errors.identificationNumber?.message}
            />
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
            <div className="flex items-start pb-1 text-gray-700">
              <Switch
                {...register('isAgreed')}
                label={<Text className="ps-1 text-gray-500">By signing up, you agree to our <Link href="/" className="font-semibold text-gray-700">Terms</Link> and <Link href="/" className="font-semibold text-gray-700">Privacy Policy</Link></Text>}
              />
            </div>
            <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'xl'}>Create Account</Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500">
        Don’t have an account? <Link href={routes.auth.signIn3} className="font-semibold text-gray-700">Sign In</Link>
      </Text>
    </>
  );
}
