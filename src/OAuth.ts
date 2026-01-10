export interface OAuthClient {
  clientId: string;
  clientName: string;
  clientType: "CONFIDENTIAL_CLIENT" | "PUBLIC_CLIENT";
  scopes: string[];
  redirectUris: string[];
  clientDescription: string;
  clientWebsite: string;
  clientTermsOfService: string;
  clientPrivacyPolicy: string;
  clientLogoUri: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
}

export type CreateOAuthClientRequest = Omit<
  OAuthClient,
  "clientId" | "createdAt" | "createdBy" | "modifiedAt" | "modifiedBy"
>;
export type CreateOAuthClientResponse = OAuthClient & {
  clientSecret?: string; // Only present on creation for CONFIDENTIAL_CLIENT
};

export type UpdateOAuthClientRequest = {
  clientId: string;
} & Partial<Omit<
  OAuthClient,
  "clientId" | "clientType" | "createdAt" | "createdBy" | "modifiedAt" | "modifiedBy"
>>;

export type UpdateOAuthClientResponse = OAuthClient;

export type GetOAuthClientRequest = {
  clientId: string;
};

export type GetOAuthClientResponse = OAuthClient;

export type GetOAuthClientsResponse = {
  clients: OAuthClient[];
};

export type OAuthAuthorizeResponse = {
  success: boolean;
  redirect_uri: string;
};

export type OAuthTokenResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
};

export type RegenerateClientSecretRequest = {
  clientId: string;
};

export type RegenerateClientSecretResponse = {
  clientSecret: string;
};
