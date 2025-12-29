import { ApiResponse } from './ApiResponse';

export type RequestLoginCodeRequest = {
  email: string;
};

export type RequestLoginCodeResponse = ApiResponse<{
  message: string;
  email: string;
}>;

export type VerifyLoginCodeRequest = {
  email: string;
  loginCode: string;
};

export type RefreshResponse = ApiResponse<{
  message: string;
}>;

export type LogoutResponse = ApiResponse<{
  message: string;
}>;
