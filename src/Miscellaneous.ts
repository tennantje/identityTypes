export type ActivateUserRequest = {
  email: string;
  verificationCode: string;
};

export type VerifyEmailChangeRequest = {
  email: string;
  verificationCode: string;
};

export type GetCurrentUserResponse = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
};
