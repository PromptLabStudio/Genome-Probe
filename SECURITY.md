# Security Policy

## Reporting a vulnerability

**Do not open a public issue for a security vulnerability.**

Use GitHub's **private vulnerability reporting** (the "Report a
vulnerability" button under this repository's *Security* tab). If that
channel is unavailable, open a minimal issue titled "Security contact
request" containing **no technical details**, and a maintainer will
provide a private channel.

We aim to:

- acknowledge your report within **72 hours**,
- provide an initial assessment within **7 days**,
- credit reporters in the fix release notes (unless you prefer anonymity).

## Scope

In scope: the probe engine (`engine/`), the web application and API
(`web/`), and the probe worker (`worker/`) in this repository, plus the
hosted service at genomeprobe.cloud.

Out of scope: third-party endpoints that users choose to probe, and
vulnerabilities in upstream model providers.

## How we handle tester API keys

This product exists to test endpoints with keys that belong to testers, so
key handling is a security invariant, not a feature:

- Keys are held **only in worker memory** for the duration of a run.
- Keys are **never written** to the database (the results schema has no
  key column), to logs, or to result evidence. Authorization headers are
  redacted structurally in code before any artifact is created.
- The job queue carries a one-time encrypted reference that is destroyed
  when the run completes.
- Self-hosted mode runs the identical code on the tester's machine; in
  that mode keys never touch our servers at all.

If you find any path where a key can persist or leak, that is a
critical-severity report — please use the private channel above.

## Incident log

Security-relevant incidents affecting this repository (for example, a key
accidentally committed by a contributor) are recorded here with dates and
remediation, after any affected credentials have been rotated.

- *2026-11-06 — Repository created. No incidents.*
