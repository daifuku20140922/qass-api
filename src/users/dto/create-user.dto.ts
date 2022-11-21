import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { UserStatus } from 'src/users/vo/userStatus.vo';

export class CreateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  qrImagePath?: string;

  @ApiProperty({ required: false })
  department?: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, default: UserStatus.Enrolled })
  status?: UserStatus;

  @ApiProperty({ required: false, default: 'everlife' })
  password?: string;
}
