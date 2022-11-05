import { AxiosError } from "axios";

type ErrorCode = 401 | 404;

class UnauthorizedError extends Error {
  code: ErrorCode;
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
    this.code = 401;
  }
}

export const generateError = (error: AxiosError) => {
  const statusCode = error.response?.status;
  if (statusCode === 401) {
    const message = "Request requires an access token";
    throw new UnauthorizedError(message);
  }
};
