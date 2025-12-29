import { ApiResponse } from './ApiResponse';

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  unverifiedEmail: string;
  emailVerified: boolean;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
}

export type JWTUser = Pick<User, "userId" | "firstName" | "lastName" | "email">;

export type RegisterUserRequest = Pick<
  User,
  "firstName" | "lastName" | "email"
>;
export type RegisterUserResponse = ApiResponse<User>;
export type UpdateUserRequest = Partial<Omit<RegisterUserRequest, "email">>;
export type UpdateUserResponse = ApiResponse<User>;
export type UpdateUserEmailRequest = Pick<User, "unverifiedEmail">;
export type UpdateUserEmailResponse = ApiResponse<User>;
export type GetUserResponse = ApiResponse<User>;
