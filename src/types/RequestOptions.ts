export interface RequestOptions<T> {
  // Pagination
  limit?: number;
  page?: number;
  offset?: number;
}

export function encodeRequestOptions<T>(options?: RequestOptions<T>): string {
  if (!options) return "";
  const { limit, page, offset } = options;
  const query = [];

  if (limit) query.push(`limit=${limit}`);
  if (page) query.push(`page=${page}`);
  if (offset) query.push(`offset=${offset}`);

  return `?${query.join("&")}`;
}
