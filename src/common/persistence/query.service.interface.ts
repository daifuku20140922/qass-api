export interface IQueryService<T> {
  findAll(): Promise<T[]>;
  findMany(condition: Partial<T>): Promise<T[]>;
  findOne(condition: Partial<T>): Promise<T>;
}
