const users = [
  {
    email: 'test@gmail.com',
    password: '123456',
  },
  {
    email: 'test2@gmail.com',
    password: '123456',
  },
  {
    email: 'test3@gmail.com',
    password: '123456',
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
