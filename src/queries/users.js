import { User } from '../model/user-model';

export async function handleCreateUser(user) {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function handleGetUserByEmail(email) {
  const user = await User.findOne({ email: email }).select('-password').lean();
  return user;
}
