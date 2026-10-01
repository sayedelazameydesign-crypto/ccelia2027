# Ccelia 2027

A secure, extensible foundation for the Ccelia 2027 project.

## Project Status

This repository contains the initial platform foundation only. It includes a small Cloudflare Worker health endpoint, automated checks, and project documentation. It does not yet implement an AI agent, browser or computer control, model integrations, persistence, or production features.

## Vision

Build an automation platform with clear security boundaries, testable components, and deployment paths that can grow as requirements become concrete.

## Architecture

- `src/`: Cloudflare Worker entry point.
- `tests/`: unit tests for the Worker contract.
- `docs/`: project documentation and a static Pages site.
- `.github/workflows/`: CI, CodeQL, Pages, Cloudflare deployment, and container workflows.
- `.devcontainer/`: reproducible Codespaces and VS Code environment.

The Worker currently exposes `GET /health` and a small root metadata response. GitHub Pages hosts documentation; Cloudflare Workers is the intended runtime for future API work.

## Quick Start

Requirements: Node.js 22 and npm.

```sh
npm ci
npm run dev
```

In another terminal, check `http://localhost:8787/health`.

## Development

```sh
npm run lint
npm run format:check
npm test
npm run build
npm audit --audit-level=high
```

See [Development](docs/development.md) for workflow details.

## Deployment

- **Cloudflare Worker:** the workflow deploys only after `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are added as repository Actions secrets. Until then, deployment is blocked and no production deploy is claimed.
- **GitHub Pages:** the Pages workflow publishes the static site from `docs/site/` after Pages is configured to use GitHub Actions.
- **Container:** the GHCR workflow builds on demand and publishes only for a published GitHub Release. The image is a local Worker development environment, not a Cloudflare production runtime.

See [Deployment](docs/deployment.md).

## Security

Read [SECURITY.md](SECURITY.md). Never commit credentials, API keys, `.dev.vars`, or production data. Security vulnerabilities must be reported privately.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Pull requests should include tests and pass the required checks.

## License

No open-source license has been selected. `LICENSE` is only a decision-pending notice, not a license grant.

## Roadmap

1. Confirm product requirements and licensing.
2. Define the agent/runtime boundary and threat model.
3. Add one focused capability at a time with tests and documented deployment behavior.
