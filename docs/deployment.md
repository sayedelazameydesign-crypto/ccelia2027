# Deployment

## Cloudflare Workers

The application runtime is a Cloudflare Worker. The GitHub Actions workflow is configured to deploy the `ccelia2027` Worker after pushes to `main` and on manual dispatch.

Before the deploy step can run, add these repository Actions secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The workflow checks for both names without printing their values. If either is missing, it reports a blocked deployment and skips the deploy step. No production deployment has been performed by this repository scaffold.

## GitHub Pages

Pages is intended for static documentation only. The workflow publishes `docs/site/` using GitHub Actions. It does not run the Worker or expose API routes.

## Container

The Docker image starts Wrangler's local Worker development server. A build-only workflow can validate the image. Publishing to GHCR is restricted to a published Release and is not triggered during initial setup.
