export type BeginWebAuthnRegistrationResponse = {
  registrationOptions: any;
};

export type CompleteWebAuthnRegistrationRequest = {
  registrationResponse: any;
};

export type CompleteWebAuthnRegistrationResponse = {
  success: boolean;
};

export type BeginWebAuthnAuthenticationRequest = {
  email: string;
};

export type BeginWebAuthnAuthenticationResponse = {
  authenticationOptions: any;
};

export type CompleteWebAuthnAuthenticationRequest = {
  email: string;
  authenticationResponse: any;
};

export type CompleteWebAuthnAuthenticationResponse = {
  success: boolean;
};

export interface PasskeySummary {
  credentialId: string;
  deviceType: string;
  backedUp: boolean;
  transports: string[];
  createdAt: string;
}

export type ListPasskeysResponse = {
  passkeys: PasskeySummary[];
};

export type DeletePasskeyRequest = {
  credentialId: string;
};

export type DeletePasskeyResponse = {
  success: boolean;
};
