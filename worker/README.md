# worker/

The isolated probe runner. It takes one job at a time from the queue,
executes the detector battery against the target endpoint, and writes
back a result.

Security invariants (see SECURITY.md):

- The tester API key exists **only in this process's memory** for the
  duration of the run. It is never logged, never persisted, and redacted
  structurally from every evidence artifact.
- Egress is restricted to the validated target: private, loopback, and
  link-local destinations (including cloud metadata addresses) are
  rejected before connect and re-checked after DNS resolution and
  redirects (SSRF hardening).
- The worker holds no credentials for any other service.
