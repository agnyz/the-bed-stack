import * as jose from 'jose';
import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';
import { UserInDb } from '@/users/users.schema';
import { env } from '@/config';
import { AuthenticationError } from '@/errors';

export const ALG = 'HS256';

const VerifiedJwtSchema = Type.Object({
  payload: Type.Object({
    user: Type.Object({
      id: Type.Number(),
      email: Type.String(),
      username: Type.String(),
    }),
    iat: Type.Number(),
    iss: Type.String(),
    aud: Type.String(),
    exp: Type.Number(),
  }),
  protectedHeader: Type.Object({
    alg: Type.Literal(ALG),
  }),
});

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

export async function verifyToken(token: string) {
  const encoder = new TextEncoder();
  const secret = encoder.encode(env.JWT_SECRET);

  let verifiedToken;
  try {
    verifiedToken = await jose.jwtVerify(token, secret, {
      algorithms: [ALG],
    });
  } catch (err) {
    throw new AuthenticationError('Invalid token');
  }
  // I'm not sure if this is a good idea, but it at least makes sure that the token is 100% correct
  // Also adds typings to the token
  if (!Value.Check(VerifiedJwtSchema, verifiedToken))
    throw new AuthenticationError('Invalid token');
  const userToken = Value.Cast(VerifiedJwtSchema, verifiedToken);
  return userToken;
}

export async function getUserFromHeaders(headers: Headers) {
  const rawHeader = headers.get('Authorization');
  if (!rawHeader) throw new AuthenticationError('Missing authorization header');

  const tokenParts = rawHeader?.split(' ');
  const tokenType = tokenParts?.[0];
  if (tokenType !== 'Token')
    throw new AuthenticationError(
      "Invalid token type. Expected header format: 'Token jwt'",
    );

  const token = tokenParts?.[1];
  const userToken = await verifyToken(token);
  return userToken.payload.user;
}

export async function requireLogin({
  request: { headers },
}: {
  request: Request;
}) {
  await getUserFromHeaders(headers);
}

export async function getUserEmailFromHeader(headers: Headers) {
  const user = await getUserFromHeaders(headers);
  return user.email;
}
