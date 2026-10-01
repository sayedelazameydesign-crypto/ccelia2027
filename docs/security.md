# Security Overview

The initial runtime has no credentials, user data, model calls, or third-party runtime dependencies.

## Baseline

- CI workflows declare only the permissions they need.
- CodeQL scans JavaScript on pushes, pull requests, and a weekly schedule.
- Dependabot checks npm, GitHub Actions, and devcontainer dependencies.
- Secret scanning and push protection are enabled only when GitHub confirms support for this public repository.
- Deployment secrets belong in GitHub Actions secrets; local Wrangler values belong in ignored `.dev.vars` files.

## Reporting

Read [SECURITY.md](../SECURITY.md). Do not put vulnerability details in public issues.

## Current Limitations

No application-specific threat model exists yet. There are no authentication, authorization, model-provider, browser-control, or persistence features to claim as implemented.
