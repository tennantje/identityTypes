import { ApiResponse } from './ApiResponse';

export type BeginWebAuthnRegistrationResponse = ApiResponse<{
  registrationOptions: any;
}>;

export type CompleteWebAuthnRegistrationRequest = {
  registrationResponse: any;
};

export type CompleteWebAuthnRegistrationResponse = ApiResponse<{
  success: boolean;
}>;

export type BeginWebAuthnAuthenticationRequest = {
  email: string;
};

export type BeginWebAuthnAuthenticationResponse = ApiResponse<{
  authenticationOptions: any;
}>;

export type CompleteWebAuthnAuthenticationRequest = {
  email: string;
  authenticationResponse: any;
};

export type CompleteWebAuthnAuthenticationResponse = ApiResponse<{
  success: boolean;
}>;

export interface PasskeySummary {
  credentialId: string;
  deviceType: string;
  backedUp: boolean;
  transports: string[];
  createdAt: string;
}

export type ListPasskeysResponse = ApiResponse<{
  passkeys: PasskeySummary[];
}>;

export type DeletePasskeyRequest = {
  credentialId: string;
};

export type DeletePasskeyResponse = ApiResponse<{
  success: boolean;
}>;
