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

export interface OAuthErrorResponse {
  error: string;
  error_description: string;
  code?: number;
  state?: string;
  redirect_uri?: string;
  iss?: string;
}

// Type guards
export const isOAuthError = (data: unknown): data is OAuthErrorResponse => {
  return typeof data === 'object' && 
         data !== null &&
         typeof (data as Record<string, unknown>).error === 'string' && 
         typeof (data as Record<string, unknown>).error_description === 'string';
};

export const isApiError = (data: unknown): data is ApiErrorResponse => {
  return typeof data === 'object' && 
         data !== null &&
         typeof (data as Record<string, unknown>).error === 'object' && 
         (data as Record<string, unknown>).error !== null &&
         typeof ((data as Record<string, unknown>).error as Record<string, unknown>).message === 'string';
};
