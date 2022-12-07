import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { FindUserByIdDto } from 'src/users/dto/find-user-by-id.dto';
import { FindUserByConditionDto } from 'src/users/dto/find-user-by-condition.dto';
import { UsersCommandUsecase } from 'src/users/usecases/user.command.usecase';
import { ApiTags } from '@nestjs/swagger';
import { UsersQueryUsecase } from 'src/users/usecases/user.query.usecase';

@Controller('v1/users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly queryUsecase: UsersQueryUsecase,
    private readonly commandUsecase: UsersCommandUsecase,
  ) {}

  @Get()
  find(@Query() input: FindUserByConditionDto) {
    return this.queryUsecase.usersByCondition(input);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const input = new FindUserByIdDto(id);
    return this.queryUsecase.userByUniqueKey(input);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.commandUsecase
      .create(createUserDto)
      .then((res) => res)
      .catch((e) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: e.message,
            error: 'InternalServerError',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: e,
          },
        );
      });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return await this.commandUsecase.update(+id, updateUserDto);
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: e.message,
          error: 'InternalServerError',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.commandUsecase.delete(+id);
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: e.message,
          error: 'InternalServerError',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }
}
