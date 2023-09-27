import * as jose from "jose";
import { jwt as jwtPlugin } from "@elysiajs/jwt";
import { User } from "@/users/users.schema";
import { env } from "@/config";
import { AuthenticationError } from "@/errors";
import Elysia from "elysia";

export const ALG = "HS256";

export async function generateToken(user: User) {
  const encoder = new TextEncoder();
  const secret = encoder.encode(env.JWT_SECRET);

  return await new jose.SignJWT({ user: user })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setIssuer("agnyz")
    .setAudience(user.email)
    .setExpirationTime("24h")
    .sign(secret);
}

// TODO: add typing
export const getUserFromHeaders = async ({
  jwt,
  request: { headers },
}: any) => {
  const rawHeader = headers.get("Authorization");
  if (!rawHeader) throw new AuthenticationError("Missing authorization header");

  const tokenParts = rawHeader?.split(" ");
  const tokenType = tokenParts?.[0];
  if (tokenType !== "Token")
    throw new AuthenticationError(
      "Invalid token type. Expected header format: 'Token jwt'"
    );

  const token = tokenParts?.[1];
  const validatedToken = await jwt.verify(token);
  if (!validatedToken) throw new AuthenticationError("Invalid token");
  return validatedToken;
};

export const requireLogin = async ({ jwt, request }: any) => {
  await getUserFromHeaders({ jwt, request });
};

export const getUserEmailFromHeader = async ({ jwt, request }: any) => {
  const user = await getUserFromHeaders({ jwt, request });
  return user.user.email;
};
