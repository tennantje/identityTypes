import type { 
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
  AuthenticationResponseJSON
} from "@simplewebauthn/server";

export type BeginWebAuthnRegistrationResponse = {
  registrationOptions: PublicKeyCredentialCreationOptionsJSON;
};

export type CompleteWebAuthnRegistrationRequest = {
  registrationResponse: RegistrationResponseJSON;
};

export type CompleteWebAuthnRegistrationResponse = {
  success: boolean;
};

export type BeginWebAuthnAuthenticationRequest = {
  email: string;
};

export type BeginWebAuthnAuthenticationResponse = {
  authenticationOptions: PublicKeyCredentialRequestOptionsJSON;
};

export type CompleteWebAuthnAuthenticationRequest = {
  email: string;
  authenticationResponse: AuthenticationResponseJSON;
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
