# Cadence / Full-stack fundamentals Resources

## Knowledge

- [Course: AI Coding Crash Course by Matt Pocock (AI Hero)](https://www.aihero.dev/workshops/ai-coding-crash-course)
  The course this repo belongs to. Use for: the workflow side: steering Claude Code, planning and specs.
- [Article: "Client-Server overview" (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview)
  Plain explanation of browser ↔ server, HTTP requests/responses. Use for: anything client vs server.
- [Docs: React "Quick Start" (react.dev)](https://react.dev/learn)
  Official intro to components, JSX, props, state. Use for: every React concept.
- [Docs: React Router "Data Loading"](https://reactrouter.com/start/framework/data-loading)
  Official docs on `loader` (server) vs `clientLoader` (browser) and `loaderData`. Use for: how Cadence routes get data.
- [Docs: React Router "Route Module"](https://reactrouter.com/start/framework/route-module)
  What each export of a route file (`loader`, `action`, `meta`, default component) does. Use for: reading any file in `app/routes/`.
- [Docs: Drizzle ORM overview](https://orm.drizzle.team/docs/overview)
  What Drizzle is and its SQL-like query style. Use for: `app/db/schema.ts`, every `db.select()` in `app/services/`.

## Wisdom (Communities)

- AI Hero course community (linked from the course page). Use for: course-specific questions and seeing how others steer Claude Code.
- [Reactiflux Discord](https://www.reactiflux.com/)
  Large, well-moderated React community. Use for: React / React Router questions.

## Gaps
- A beginner-friendly SQL/relational-database primer (tables, rows, foreign keys, joins) — needed before the database lessons.
