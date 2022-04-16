export type Pagination = {
  pageTake: number;
  offset: number;
  total: number;
};

export type PaginatedResponse<T> = {
  data: T;
  pagination: Pagination;
};
