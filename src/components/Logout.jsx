import { handleLogout } from '../app/actions/index';

const Logout = () => {
  return (
    <form action={handleLogout}>
      <button
        className='bg-green-400 my-2 text-white p-1 rounded'
        type='submit'>
        Logout
      </button>
    </form>
  );
};

export default Logout;
