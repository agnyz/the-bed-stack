export class AuthenticationError extends Error {
  public status = 401;
  public type = "authentication";
  constructor(public message: string) {
    super(message);
  }
}

export class AuthorizationError extends Error {
  public status = 403;
  public type = "authorization";
  constructor(public message: string) {
    super(message);
  }
}
