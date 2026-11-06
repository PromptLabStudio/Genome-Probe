# tests/

Test suite for `engine/`, `web/`, and `worker/`.

- Every detector ships with unit tests plus at least one adversarial
  fixture (a relay behavior it must catch and one it must not
  false-positive on).
- Tests never use real API keys or live third-party endpoints; targets
  are local fixtures.
- CI runs this suite on every pull request; a red suite blocks merge.
