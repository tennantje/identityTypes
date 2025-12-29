import { ApiResponse } from './ApiResponse';
import { User } from './User';

export type ActivateUserRequest = {
  email: string;
  verificationCode: string;
};

export type ActivateUserResponse = User;

export type VerifyEmailChangeRequest = {
  email: string;
  verificationCode: string;
};

export type VerifyEmailChangeResponse = User;

export type GetCurrentUserResponse = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
};
