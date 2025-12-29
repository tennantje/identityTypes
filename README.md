# @tennantje/identity-types

Shared TypeScript types for Jeremy's identity server project.

**Note**: While this package is open source, it's highly specific to my personal identity server implementation and likely won't be useful for other projects. You're welcome to use it, but it's really just here so I can share types between my frontend and backend.

## Installation

```bash
npm install @tennantje/identity-types
```

## Usage

```typescript
import { User, RegisterUserRequest } from "@tennantje/identity-types";
```

## Development

```bash
npm run build    # Build the package
./release.sh     # Bump version, commit, tag, push, and publish
```
