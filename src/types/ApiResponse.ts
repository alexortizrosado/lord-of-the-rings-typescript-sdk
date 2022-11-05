export interface ApiResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
