'use server';
import { signIn, signOut } from '../../auth';

export async function handleSocialLogin(formData) {
  const action = formData.get('action');
  await signIn(action, { redirectTo: '/home' });
  console.log(action);
}

export async function handleLogout() {
  await signOut({ redirectTo: '/' });
}
