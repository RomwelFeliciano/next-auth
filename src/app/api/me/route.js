import { NextResponse } from 'next/server';
import { auth } from '../../../auth';

import { handleGetUserByEmail } from '../../../queries/users';
import { dbConnect } from '../../../lib/mongo';

export const GET = async (request) => {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse('You are not authenticated!', {
      status: 401,
    });
  }

  await dbConnect();

  try {
    const user = await handleGetUserByEmail(session?.user?.email);

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
