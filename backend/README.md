# Backend

Reserved for a future Express/Node application. The current frontend is static and does not call a backend.

```text
src/
├── routes/
├── controllers/
└── services/
```

There are no backend dependencies, runtime configuration, or environment variables yet. Keep future backend packages and environment files here, separate from `frontend/`. Add a `.env.example` with variable names and empty values when configuration is introduced; keep actual secrets in ignored local environment files or the hosting provider's environment settings.

The current Vercel project deploys `frontend/` only. This directory is not deployed.
