export interface ApiResponse<T = any> {
  data: T;
}

export interface ApiErrorResponse {
  error: {
    message: string;
    code?: string;
    details?: any;
  };
}
