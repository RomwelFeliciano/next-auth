import SocialLogin from './SocialLogin';

const LoginForm = () => {
  return (
    <>
      <form
        action=''
        className='my-5 flex flex-col items-center border p-3 border-e-gray-200 rounded-md'>
        <div className='my-2'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='border mx-2 border-gray-500 rounded'
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='my-2'>
          <label htmlFor='password'>Password</label>
          <input
            className='border mx-2 border-gray-500 rounded'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <button
          type='submit'
          className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'>
          Credential Login
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default LoginForm;
