export interface IRepository<T> {
  create(item: T): Promise<T>;
  update(id: any, item: Partial<T>): Promise<T>;
  delete(id: any);
}

export interface IRepo<T> {
  store(item: T): Promise<T>;
  delete(id: any);
}
