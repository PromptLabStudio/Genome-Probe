# Methodology (summary)

The full, always-current methodology lives at
**genomeprobe.cloud/methodology**. This file is the in-repo summary so the
repository stands on its own.

## Principles

1. **Every claim points to raw evidence.** Each detector result links to
   the actual request/response artifacts (keys structurally redacted).
2. **"Inconclusive" is a first-class verdict.** A probe that forces a
   verdict from thin data manufactures false accusations. When evidence is
   below a published threshold, we say so, and we show the nearest models
   and the distance scores.
3. **Composite scores count only detectors that actually ran.** Timed-out
   or inapplicable detectors are listed as "not tested", never silently
   treated as passed.

## Verdict taxonomy

Two independent axes:

- **Authenticity:** `Genuine` · `Genuine with defects` · `Swapped —
  different model detected` · `Downgraded — cheaper sibling detected` ·
  `Inconclusive`
- **Origin:** `Official API` · `Cloud channel (Bedrock/Vertex/Azure)` ·
  `Subscription-derived` · `Relay/aggregator` · `Undetermined`

## Detector families

- **Identity fingerprinting.** A battery of short, deterministic behavioral
  probes compared against baselines captured from **official provider
  endpoints only**. Family classification is the floor of every run;
  sub-model verdicts require the distance to the winning baseline to pass
  a published statistical threshold.
- **Claude thinking-signature verification.** Responses with thinking
  enabled carry a `signature` block signed by Anthropic's servers; a relay
  cannot forge it. This proves the traffic traversed the genuine Anthropic
  path. It does **not** prove the tier — tier is decided by behavioral
  fingerprinting. Both halves of that sentence matter.
- **Metering honesty.** Calibrated prompts with exactly known token counts
  per family tokenizer are compared to reported `prompt_tokens`; stream
  and non-stream usage are cross-checked; sequential identical requests
  are inspected for undisclosed cache double-billing.
- **Channel detection.** Relay fingerprints are aggregated from **many**
  responses across response classes (chat, streaming, model list,
  messages format, and error envelopes). No label ever depends on a
  single request or a single header.
- **Streaming parity.** Streamed and non-streamed answers to identical
  prompts must match in content, usage, and chunk structure.
- **Structured-output passthrough.** A strict `json_schema` request must
  be enforced, not quietly downgraded to loose JSON or wrapped in
  Markdown fences.
- **SSE integrity.** Detects buffered "fake streaming", silent mid-stream
  truncation, and hidden mid-stream errors.
- **Context-length verification.** Tiered needle tests (32K → 128K →
  claimed maximum) with per-run random needles; silent truncation is
  reported as a measured cut-off point. This mode carries a published
  cost estimate before it runs, because it spends the tester's tokens.

## Time budgets

Every detector has its own timeout and retry budget. There is **no global
run deadline** that can kill a run — slow endpoints are exactly the ones
most worth testing. A Quick mode (deterministic detectors only) targets
under 90 seconds on a healthy endpoint; Full mode runs everything and
shows time/cost estimates up front.

## Known limitations (stated before others state them for us)

- A thinking signature proves path, not tier (above).
- Temperature-0 agreement is weak evidence between close sibling models;
  we treat differential tests as a weak signal only.
- A small set of anti-gaming probes is deliberately not published, so
  relays cannot train against the full battery. Detector *families* and
  thresholds are public; specific anti-gaming prompt content is not.
