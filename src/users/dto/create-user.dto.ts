import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

import { UserStatus } from 'src/users/entities/user.status';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1000000)
  @Max(9999999)
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  qrImagePath?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

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
  status?: UserStatus;
}
