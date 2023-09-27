import * as jose from "jose";
import { User } from "@/users/users.schema";
import { env } from "@/config";

export async function generateToken(user: User) {
  const encoder = new TextEncoder();
  const secret = encoder.encode(env.JWT_SECRET);

  return await new jose.SignJWT({ user: user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("agnyz")
    .setAudience(user.email)
    .setExpirationTime("24h")
    .sign(secret);
}
