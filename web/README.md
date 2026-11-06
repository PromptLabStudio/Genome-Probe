# web/

The FastAPI application: public website (server-rendered, Tailwind +
daisyUI), the REST API (`/v1/...`), and the MCP server — one codebase,
one process.

Rules that bind this directory:

- Core pages are server-rendered for search engines and AI agents; no
  client-side framework is required to read a result page.
- Result pages (`/r/{id}`) are append-only views over stored results:
  the web layer never edits a result.
- The app never receives or stores tester API keys; run creation hands
  keys to the worker through the one-time job reference only.
