# InterviewIQ

InterviewIQ is a full-stack mock interview platform where interviewers can schedule and run coding interviews, and candidates can join live sessions with a built-in code editor.

## Features

- Authentication and user management with Clerk
- Role-based experience for interviewers and candidates
- Interview scheduling with candidate/interviewer assignment
- Instant meeting creation and join-by-link flow
- Live video interviews powered by Stream Video SDK
- In-meeting coding environment (Monaco Editor) with multi-language starter code
- Interview status tracking (upcoming, completed, succeeded, failed)
- Post-interview rating and feedback comments
- Recording browser with playback and quick link copy
- Real-time backend and data layer with Convex

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + Radix UI
- Clerk (auth)
- Convex (database, queries, mutations, webhooks)
- Stream Video SDK (calls and recordings)
- Monaco Editor

## Project Structure

```text
src/
  app/
    (root)/               # Main authenticated app routes
    (admin)/dashboard     # Interviewer dashboard
  components/             # Reusable UI and feature components
  hooks/                  # Custom hooks for calls, roles, and meeting actions
  actions/                # Server actions (e.g. Stream token provider)
convex/
  schema.ts               # Convex tables/indexes
  users.ts                # User sync and user queries
  interview.ts            # Interview queries and mutations
  comments.ts             # Feedback/comment mutations and queries
  http.ts                 # Clerk webhook endpoint
```

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
CLERK_JWT_ISSUER_DOMAIN=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

### Notes

- `CLERK_WEBHOOK_SECRET` is required by `convex/http.ts` for webhook verification.
- `NEXT_PUBLIC_STREAM_API_KEY` and `STREAM_SECRET_KEY` are required for Stream call/token flow.
- `CLERK_JWT_ISSUER_DOMAIN` is used by Convex auth configuration.

## Local Development

Install dependencies:

```bash
npm install
```

Run Convex in one terminal:

```bash
npx convex dev
```

Run Next.js in another terminal:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Clerk Webhook Setup

When users sign up, InterviewIQ syncs them into Convex through a Clerk webhook.

1. In Clerk Dashboard, create a webhook endpoint:
   - URL: `https://<your-convex-deployment>/clerk-webhook`
2. Subscribe to event:
   - `user.created`
3. Copy the webhook signing secret into:
   - `CLERK_WEBHOOK_SECRET`

## Role Behavior

- New users are created as `candidate` by default.
- Interviewer-only actions (schedule, dashboard controls) are shown based on user role.
- To test interviewer flows locally, update a user role to `interviewer` in Convex data.

## Available Scripts

- `npm run dev` - Start Next.js dev server
- `npm run build` - Production build
- `npm run start` - Start production server

## Contributing

Contributions are welcome. Please follow the existing code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
