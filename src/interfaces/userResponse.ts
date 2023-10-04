import { AuthService } from '@/auth/auth.service';
import { UserInDb } from '@/users/users.schema';

export class IUserResponse {
  constructor(private readonly authService: AuthService)
  {}
  async generateUserResponse(user: UserInDb) {
    return {
      user: {
        email: user.email,
        bio: user.bio,
        image: user.image,
        username: user.username,
        token: await this.authService.generateToken(user),
      },
    };
  }
}
