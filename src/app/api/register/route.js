import { NextResponse } from 'next/server';
import { handleCreateUser } from '../../../queries/users';
import bcrypt from 'bcryptjs';
import { dbConnect } from '../../../lib/mongo';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // Create a DB Connection
  await dbConnect();
  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB Payload
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };
  // Update the DB
  try {
    await handleCreateUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse('User has been created!', {
    status: 201,
  });
};
