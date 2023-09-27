import * as jose from 'jose';
import { UserInDb } from '@/users/users.schema';
import { env } from '@/config';
import { AuthenticationError } from '@/errors';

export const ALG = 'HS256';

export async function generateToken(user: UserInDb) {
  const encoder = new TextEncoder();
  const secret = encoder.encode(env.JWT_SECRET);

  return await new jose.SignJWT({
    user: { id: user.id, email: user.email, username: user.username },
  })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setIssuer('agnyz')
    .setAudience(user.email)
    .setExpirationTime('24h')
    .sign(secret);
}

// TODO: add typing
export const getUserFromHeaders = async ({
  jwt,
  request: { headers },
}: // biome-ignore lint/suspicious/noExplicitAny: <explanation>
any) => {
  const rawHeader = headers.get('Authorization');
  if (!rawHeader) throw new AuthenticationError('Missing authorization header');

  const tokenParts = rawHeader?.split(' ');
  const tokenType = tokenParts?.[0];
  if (tokenType !== 'Token')
    throw new AuthenticationError(
      "Invalid token type. Expected header format: 'Token jwt'",
    );

  const token = tokenParts?.[1];
  const validatedToken = await jwt.verify(token);
  if (!validatedToken) throw new AuthenticationError('Invalid token');
  return validatedToken;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const requireLogin = async ({ jwt, request }: any) => {
  await getUserFromHeaders({ jwt, request });
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const getUserEmailFromHeader = async ({ jwt, request }: any) => {
  const user = await getUserFromHeaders({ jwt, request });
  return user.user.email;
};
