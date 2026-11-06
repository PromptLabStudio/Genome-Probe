# Contributing to GenomeProbe

Thanks for helping make model verification better. This document is the
complete rulebook for contributing — please read it before your first PR.

## Ways to contribute

- New or improved detectors (open an issue first to discuss the approach)
- Bug fixes and correctness improvements
- Documentation and translations
- Test coverage, especially adversarial relay fixtures

## Ground rules

1. **Everything lands via pull request.** Direct pushes to `main` are
   blocked. A PR needs green CI and at least one maintainer review.
2. **Tests are mandatory** for changes under `engine/`, `web/`, or
   `worker/`. New behavior ships with tests; bug fixes ship with a
   regression test.
3. **Verdict discipline.** Any change that can alter a verdict, a score, or
   a detector threshold must:
   - bump the engine version,
   - explain the change *with evidence* in `CHANGELOG.md`,
   - never be tuned to make a specific gateway look better or worse.
   Verdict integrity is the product; PRs that compromise it are rejected
   regardless of technical merit.
4. **Disputes are not GitHub issues.** If you operate an endpoint and
   believe a verdict about it is wrong, use the dispute process linked from
   the result page. The `false_verdict` issue template exists only to
   collect technical facts (run id, endpoint, evidence) and points to that
   process.

## Hard prohibitions

Never include, in any issue, PR, commit, or attachment:

- **Real API keys** — anyone's, including your own. Examples always use
  the placeholder `sk-REPLACE_ME`. A key that gets posted is treated as
  leaked: it must be rotated, and maintainers will scrub history and note
  the incident in `SECURITY.md`.
- **Baseline fingerprint data** (raw or derived). Baselines are managed
  outside this repository.
- **Personal data** of users, testers, or gateway operators.

## Style

- Commit messages: `area: short summary`, e.g.
  `engine: add streaming parity detector`.
- Python code is formatted and linted with `ruff` (configuration in the
  repo root once code lands); CI enforces it.
- Write comments and docs in English. Explain *why*, not *what*.

## Licensing of contributions

By opening a pull request you agree your contribution is released under
the project's Apache-2.0 license (inbound = outbound). Do not submit code
you do not have the right to contribute, and do not copy code from
AGPL-licensed projects into this repository.
