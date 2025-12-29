export type CreateOAuthClientRequest = {
  clientName: string;
  clientType: "CONFIDENTIAL_CLIENT" | "PUBLIC_CLIENT";
  redirectUris: string[];
  scopes: string[];
  clientDescription: string;
  clientWebsite: string;
  clientLogoUri: string;
};

export interface OAuthClient {
  clientId: string;
  clientName: string;
  clientType: "CONFIDENTIAL_CLIENT" | "PUBLIC_CLIENT";
  scopes: string[];
  redirectUris: string[];
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  clientDescription: string;
  clientWebsite: string;
  clientLogoUri: string;
}

export type CreateOAuthClientResponse = OAuthClient;

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
