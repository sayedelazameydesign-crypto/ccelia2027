# Architecture

## Current Foundation

```text
Client
  -> Cloudflare Worker (src/index.js)
     -> GET /health
     -> GET /

GitHub Pages
  -> static documentation from docs/site/

GitHub Actions
  -> CI and CodeQL
  -> Pages deployment
  -> Cloudflare Worker deployment (blocked until secrets are configured)
```

The Worker has no model, browser-control, storage, or external-service bindings yet. This is intentional: no product behavior has been invented for the scaffold.

## Proposed Growth Boundaries

- Keep request handling and provider integrations behind explicit interfaces.
- Treat model output and browser/computer actions as untrusted input.
- Add persistent storage only with a documented data-retention and access model.
- Keep credentials in platform secret stores; never in source, config, or logs.
- Add architecture decision records under `docs/decisions/` when a choice has long-term cost.
