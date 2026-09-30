# ML Club Backend

Express + MongoDB (Mongoose) + Cloudinary API for the ML Club website.

## 1. Setup

```bash
npm install
cp .env.example .env
```

Fill in `.env`:
- `MONGODB_URI` — create a free cluster at mongodb.com/atlas, get the connection string.
- `CLOUDINARY_*` — create a free account at cloudinary.com, copy the 3 values from your dashboard.
- `JWT_SECRET` — any long random string.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the first Core Team login you want to create.

Create the first Core Team login (replaces the old `sitml2026` / `mlclub` passkeys):

```bash
npm run seed:admin
```

Run the server:

```bash
npm run dev      # with auto-reload (nodemon)
npm start        # production
```

Server runs at `http://localhost:5000`. Health check: `GET /api/health`.

## 2. API Reference

| Method | Route | Auth | Purpose |
|---|---|---|---|
| POST | `/api/auth/login` | Public | `{ email, password }` → `{ token, user }` |
| GET  | `/api/auth/me` | Bearer token | Validate stored token |
| GET  | `/api/projects?category=` | Public | List projects, optional category filter |
| GET  | `/api/projects/:id` | Public | One project |
| POST | `/api/projects` | Bearer token | Create project |
| PUT  | `/api/projects/:id` | Bearer token | Edit project |
| DELETE | `/api/projects/:id` | Bearer token | Remove project |
| GET  | `/api/modules` | Public | List hardware modules + photos |
| POST | `/api/modules` | Bearer token | Create a module (`name`, `description`) |
| POST | `/api/modules/:id/photos` | Bearer token | Upload up to 8 photos (`multipart/form-data`, field `photos`) |
| DELETE | `/api/modules/:id` | Bearer token | Remove module |
| POST | `/api/students/register` | Public | Cohort registration form submission |
| GET  | `/api/students` | Bearer token | View all registrations |
| POST | `/api/upload` | Bearer token | Generic photo upload (`multipart/form-data`, field `photos`), returns Cloudinary URLs |

Send the token as `Authorization: Bearer <token>` on protected routes.

## 3. Wiring up your React frontend

Your current `App.tsx` checks the passkey **in the browser** (`sitml2026`/`mlclub`/`sit`), which anyone can read in dev tools. Replace that block:

```tsx
// Before
const handleAuthSubmit = (e) => {
  e.preventDefault();
  const cleanKey = passkeyInput.trim().toLowerCase();
  if (cleanKey === 'sitml2026' || cleanKey === 'mlclub' || cleanKey === 'sit') {
    setHasCoreAccess(true);
    ...
```

```tsx
// After — calls the real backend
const handleAuthSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), // swap passkey input for email+password
    });
    if (!res.ok) throw new Error();
    const { token } = await res.json();
    localStorage.setItem('mlclub_token', token);
    setHasCoreAccess(true);
    setAuthModalOpen(false);
  } catch {
    setAuthError(true);
  }
};
```

Then on app load, call `GET /api/auth/me` with the stored token to keep `hasCoreAccess` true across refreshes, and attach `Authorization: Bearer <token>` to every project/module/upload request.

Add `VITE_API_URL=http://localhost:5000` to your frontend's `.env`.

## 4. Deploying

- Backend: Render, Railway, or Fly.io (all have free tiers that work well with MongoDB Atlas).
- Set the same environment variables from `.env` in your host's dashboard.
- Update `CLIENT_ORIGIN` to your deployed frontend's URL, and `VITE_API_URL` in the frontend to your deployed backend's URL.
