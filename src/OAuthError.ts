export interface OAuthErrorInput {
  error: string;
  errorDescription: string;
  code: number;
  redirectUri?: string;
  state?: string;
  sendCorsHeaders?: boolean;
}
export interface OAuthChildErrorInput {
  code: number;
  redirectUri?: string;
  state?: string;
  sendCorsHeaders?: boolean;
}

export class OAuthError extends Error {
  public error: string;
  public errorDescription: string;
  public code: number;
  public redirectUri?: string;
  public state?: string;
  public sendCorsHeaders: boolean;

  constructor(input: OAuthErrorInput) {
    super(input.error);
    this.error = input.error;
    this.code = input.code;
    this.errorDescription = input.errorDescription;
    this.redirectUri = input.redirectUri;
    this.state = input.state;
    this.sendCorsHeaders = input.sendCorsHeaders ?? false;
  }
}

export class OAuthInvalidRequestError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "invalid_request",
      errorDescription:
        "The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthInvalidGrantError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "invalid_grant",
      errorDescription:
        "The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirect URI used in the authorization request, or was issued to another client.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthUnauthorizedClientError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "unauthorized_client",
      errorDescription:
        "The client is not authorized to request an authorization code using this method.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthAccessDeniedError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "access_denied",
      errorDescription:
        "The resource owner or authorization server denied the request.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthUnsupportedResponseTypeError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "unsupported_response_type",
      errorDescription:
        "The authorization server does not support obtaining an authorization code using this method.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthInvalidScopeError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "invalid_scope",
      errorDescription:
        "The requested scope is invalid, unknown, or malformed.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthServerError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "server_error",
      errorDescription:
        "The authorization server encountered an unexpected condition that prevented it from fulfilling the request.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthTemporarilyUnavailableError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "temporarily_unavailable",
      errorDescription:
        "The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}

export class OAuthUnsupportedGrantTypeError extends OAuthError {
  constructor({
    code,
    redirectUri,
    state,
    sendCorsHeaders,
  }: OAuthChildErrorInput) {
    super({
      code,
      error: "unsupported_grant_type",
      errorDescription:
        "The authorization grant type is not supported by the authorization server.",
      redirectUri,
      state,
      sendCorsHeaders,
    });
  }
}
