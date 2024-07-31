import { handleSocialLogin } from '../app/actions/index';

const SocialLogin = () => {
  return (
    <form action={handleSocialLogin}>
      <button
        className='bg-blue-400 text-white p-1 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='google'>
        Sign In With Google
      </button>
      <button
        className='bg-black text-white p-1 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='github'>
        Sign In With Github
      </button>
    </form>
  );
};

export default SocialLogin;
