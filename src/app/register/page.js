import RegistrationForm from '@/components/RegistrationForm';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4'>
      <h1 className='text-3xl my-3'>Hey, time to Sign In</h1>
      <RegistrationForm />
      <p>
        Already have an account?
        <Link href='/' className='mx-2 underline'>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
