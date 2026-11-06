# engine/

The detector core: identity fingerprinting, metering audits, channel
detection, streaming/structured-output integrity, and verdict composition.

Rules that bind this directory:

- Detectors are pure, individually testable units with their own time
  budgets (see METHODOLOGY.md).
- No detector may depend on a single request or a single header for a
  label.
- Anything that can change a verdict is versioned and changelogged with
  evidence (see CONTRIBUTING.md, "Verdict discipline").
- Baseline *data* never lives here — only the code that consumes
  versioned baseline datasets managed outside this repository.
