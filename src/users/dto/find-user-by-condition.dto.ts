import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { UserStatus } from 'src/users/entities/user.status';

export class FindUserByConditionDto {
  @ApiProperty({ name: 'name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ name: 'department', required: false })
  @IsString()
  @IsOptional()
  department?: string;

  @ApiProperty({
    enum: UserStatus,
    example: UserStatus.Enrolled,
    name: 'status',
    required: false,
  })
  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus;
}
