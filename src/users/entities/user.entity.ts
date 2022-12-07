import { UserStatus } from 'src/users/entities/user.status';

export class UserEntity {
  id: number;
  qrImagePath?: string;
  name: string;
  department?: string;
  password: string;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Partial<UserEntity>) {
    this.id = props.id;
    this.qrImagePath = props.qrImagePath;
    this.name = props.name;
    this.department = props.department;
    this.password = props.password
      ? props.password
      : process.env.DEFAULT_USER_PASSWORD;
    this.status = props.status ? props.status : UserStatus.Enrolled;
    this.createdAt = props.createdAt ? props.createdAt : new Date();
    this.updatedAt = props.updatedAt ? props.updatedAt : new Date();
  }
}
