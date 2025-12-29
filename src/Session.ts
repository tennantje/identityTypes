export type RequestLoginCodeRequest = {
  email: string;
};

export type RequestLoginCodeResponse = {
  message: string;
  email: string;
};

export type VerifyLoginCodeRequest = {
  email: string;
  loginCode: string;
};

export type RefreshResponse = {
  message: string;
};

export type LogoutResponse = {
  message: string;
};
