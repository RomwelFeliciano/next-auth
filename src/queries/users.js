import { User } from '../model/user-model';

export async function handleCreateUser(user) {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}
