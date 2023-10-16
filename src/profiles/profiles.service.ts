import { NotFoundError } from 'elysia';
import { ProfilesRepository } from '@/profiles/profiles.repository';
import { Profile } from '@/profiles/profiles.schema';
import { UsersRepository } from '@/users/users.repository';

export class ProfilesService {
  constructor(
    private readonly repository: ProfilesRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async findByUsername(currentUserId: number, targetUsername: string) {
    const user = await this.repository.findByUsername(
      currentUserId,
      targetUsername,
    );
    if (!user) {
      throw new NotFoundError('Profile not found');
    }
    return await this.generateProfileResponse(user);
  }

  async followUser(currentUserId: number, targetUsername: string) {
    const userToFollow = await this.usersRepository.findByUsername(
      targetUsername,
    );
    if (!userToFollow) {
      throw new NotFoundError('Profile not found');
    }

    await this.repository.followUser(currentUserId, userToFollow.id);

    const followedProfile = await this.repository.findByUsername(
      currentUserId,
      targetUsername,
    );
    if (!followedProfile) {
      throw new NotFoundError('Profile not found');
    }

    return await this.generateProfileResponse(followedProfile);
  }

  async unfollowUser(currentUserId: number, targetUsername: string) {
    const userToUnfollow = await this.usersRepository.findByUsername(
      targetUsername,
    );
    if (!userToUnfollow) {
      throw new NotFoundError('Profile not found');
    }

    await this.repository.unfollowUser(currentUserId, userToUnfollow.id);

    const unfollowedProfile = await this.repository.findByUsername(
      currentUserId,
      targetUsername,
    );
    if (!unfollowedProfile) {
      throw new NotFoundError('Profile not found');
    }

    return await this.generateProfileResponse(unfollowedProfile);
  }

  async generateProfileResponse(user: Profile) {
    return {
      profile: {
        bio: user.bio,
        image: user.image,
        username: user.username,
        following: user.following,
      },
    };
  }
}
