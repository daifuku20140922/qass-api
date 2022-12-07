import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { UserStatus } from '../entities/user.status';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  qrImagePath?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({
    enum: UserStatus,
    example: UserStatus.Enrolled,
  })
  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;
}
