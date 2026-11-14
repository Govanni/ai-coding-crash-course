# Mission: Understanding the Cadence codebase

## Why
To work through Matt Pocock's AI Coding Crash Course and actually understand the code Claude Code writes, so I can steer it and review its output instead of blindly vibe coding.

## Success looks like
- I can trace any page in Cadence from the browser → React Router loader/action (server) → service → Drizzle → SQLite and back.
- I can say, for any line of code, whether it runs on the client, the server, or both.
- I can read a React component in the repo and explain what it renders and why.
- I can read `app/db/schema.ts` and a Drizzle query and say what data comes back.
- I can give Claude Code precise instructions ("add a column to `courses`, generate a migration, expose it in the loader") and judge whether the result is right.

## Constraints
- Knows basic TypeScript; has done a little vibe coding.
- Has never used React; client/server split is fuzzy; databases are new.
- Prefers a mix: concept + quiz, then one small hands-on task in the real repo per lesson.

## Out of scope (for now)
- Styling (Tailwind/shadcn) beyond recognising it.
- Deployment, production hosting, Ably real-time, the `request-logger/` tooling.
- Advanced React (custom hooks, performance tuning).
