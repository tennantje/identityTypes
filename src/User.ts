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
export type RegisterUserResponse = User;
export type UpdateUserRequest = Partial<Omit<RegisterUserRequest, "email">>;
export type UpdateUserResponse = User;
export type UpdateUserEmailRequest = Pick<User, "unverifiedEmail">;
export type UpdateUserEmailResponse = User;
export type GetUserResponse = User;

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

export type GetLoginMethodsRequest = Pick<User, "email">;
export interface GetLoginMethodsResponse {
  email: boolean;
  passkey: boolean;
}
