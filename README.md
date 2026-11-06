# GenomeProbe

**Check your model's DNA family.**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/site-genomeprobe.cloud-7ee787)](https://genomeprobe.cloud)
[![Status](https://img.shields.io/badge/status-pre--alpha-orange)](#project-status)

GenomeProbe is an independent authenticity probe for AI API endpoints. Point it
at any OpenAI-compatible endpoint and it tells you **which model family is
really answering** — and whether the relay in front of it is honest about
tokens, streaming, and structured output. Every run produces a permanent,
shareable evidence page.

## What it checks

- **Model identity** — behavioral fingerprinting at family level and, where a
  maintained baseline exists, sub-model level. Verdicts below the published
  statistical threshold are reported as **Inconclusive**, never guessed.
- **Cryptographic Claude verification** — Anthropic thinking-block signatures
  that a relay cannot forge (proves the genuine Anthropic path, not the tier).
- **Metering honesty** — token-inflation audits against calibrated prompts,
  stream vs non-stream usage consistency, cache double-billing detection.
- **Relay & protocol integrity** — multi-signal channel detection, streaming
  parity, structured-output (`json_schema`) passthrough, fake-streaming and
  SSE integrity checks.
- **Context-length verification** — tiered needle tests against claimed
  context windows, with the measured cut-off point reported.

Verdicts are two-axis: **Authenticity** (`Genuine` · `Genuine with defects` ·
`Swapped` · `Downgraded` · `Inconclusive`) × **Origin** (`Official API` ·
`Cloud channel` · `Subscription-derived` · `Relay/aggregator` ·
`Undetermined`). Full details: [METHODOLOGY.md](METHODOLOGY.md).

## Quickstart

1. **Website** — [genomeprobe.cloud](https://genomeprobe.cloud): paste an
   endpoint + key, get a permanent result link. No account, no sign-up.
2. **API** — REST API for programmatic probes (see
   [examples/](examples/) for `curl` examples; available with the first
   public release).
3. **MCP** — an official MCP server exposes `start_probe`,
   `get_probe_result`, `get_gateway_score`, and `list_supported_models` so
   AI agents can verify endpoints inside their own workflows.

## Run it yourself

The probe runner is designed to also run entirely on your own machine: the
exact same code that powers the hosted service, packaged as a CLI/Docker
image, with signed results you may optionally publish. *Ships with the first
engine release.*

## Trust & key safety

**Your API key is never stored.** Not in the database (the results schema has
no column for it), not in logs, not in result evidence. Keys exist only in
worker memory for the duration of a run. This is verifiable, not just
promised: read [`worker/`](worker/) — redaction is structural, in code.
Details and the full security model: [SECURITY.md](SECURITY.md).

## What is *not* in this repository

- **Baseline fingerprint datasets.** Baselines are a separately managed,
  versioned data asset and are not published here — the same separation
  other probe engines use. Every published result records the engine and
  baseline versions that produced it.
- **A small set of anti-gaming probes**, deliberately unpublished so relays
  cannot train against them. This omission is disclosed openly in
  [METHODOLOGY.md](METHODOLOGY.md).

## Repository rules

- Everything lands via pull request; `main` is protected (green CI + review).
- Changes that can alter verdicts must bump the engine version and justify
  the change with evidence in [CHANGELOG.md](CHANGELOG.md).
- Never post real API keys, raw baselines, or personal data in issues, PRs,
  or commits. A posted key is a leaked key: rotate it.
- Full rules: [CONTRIBUTING.md](CONTRIBUTING.md) ·
  [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## Project status

Pre-alpha. This repository currently contains the project governance,
structure, and methodology; the engine is under active development. The
placeholder site is live at [genomeprobe.cloud](https://genomeprobe.cloud).

## License

Apache-2.0 — see [LICENSE](LICENSE). GenomeProbe is a
[PromptLab Studios](https://github.com/PromptLabStudio) project.
