import { ApiResponse } from './ApiResponse';

export type ActivateUserRequest = {
  userId: string;
  verificationCode: string;
};

export type VerifyEmailChangeRequest = {
  userId: string;
  verificationCode: string;
};

export type GetCurrentUserResponse = ApiResponse<{
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}>;
