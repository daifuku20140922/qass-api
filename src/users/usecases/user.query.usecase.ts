import { Injectable } from '@nestjs/common';
import { UsersQueryService } from 'src/users/infra/users.query.service.prisma';
import { FindUserByIdDto } from 'src/users/dto/find-user-by-id.dto';
import { FindUserByConditionDto } from 'src/users/dto/find-user-by-condition.dto';

@Injectable()
export class UsersQueryUsecase {
  constructor(private readonly query: UsersQueryService) {}

  userByUniqueKey(input: FindUserByIdDto) {
    //TODO: validate input

    return this.query.user(input);
  }

  usersByCondition(input: FindUserByConditionDto) {
    //TODO: validate input

    return this.query.users({ where: input, orderBy: { id: 'asc' } });
  }
}
