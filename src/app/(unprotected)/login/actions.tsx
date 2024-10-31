/** @format */

'use server';

import { signupformSchema } from './schema';
import bcrypt from 'bcryptjs';

export async function signup(state, formData) {
  // 1. Validate fields
  const validatedFields = signupformSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  const { name, email, password } = validatedFields.data;
  //  2. Create user
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  //  3. Create session
}
