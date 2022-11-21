import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserStatus } from './vo/userStatus.vo';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiQuery({ name: 'department', required: false, type: String })
  @ApiQuery({ name: 'id', required: false, type: Number })
  @ApiQuery({ name: 'status', required: false, type: String })
  @Get()
  find(
    @Query('department') department: string,
    @Query('id') id: number,
    @Query('status') status: string,
  ) {
    if (department) {
      return this.usersService.findByDepartment(department);
    }
    if (id) {
      return this.usersService.findOne(+id);
    }
    if (status) {
      switch (status) {
        case UserStatus.Enrolled:
          return this.usersService.findByStatus(status);
        case UserStatus.Retired:
          return this.usersService.findByStatus(status);
        case UserStatus.Suspended:
          return this.usersService.findByStatus(status);
        //StatusQueryParamが不正な場合はfindAllメソッドを呼ぶか空で返すか悩ましい
      }
    }
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
