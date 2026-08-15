# Tradie Figma implementation set — 2041

Target Figma file: `JQFTV439jaXbU9psaFhXaI`
Branch: `figma-7-designs`

## Screens

1. `2041:213` — Negotiations Hub
2. `2041:220` — Contracts List
3. `2041:216` — Negotiation Detail / Chat
4. `2041:218` — Contract Preview
5. `2041:221` — Confirm Contract / OTP
6. `2041:219` — Contract PDF
7. `2041:217` — Request Amendment

## Source-of-truth requirements

- Preserve Figma visual hierarchy and observable layers.
- Preserve exact typography intent, spacing, dimensions, colors, borders, radii, shadows, state styling, copy, and interactions represented in Figma.
- Reuse the exact Figma-exported icons/images rather than redrawing them.
- Do not add Tailwind as a dependency unless explicitly requested.
- Adapt the implementation to the actual application stack once source code is present; do not invent a target framework.
- Keep the seven screens connected to a coherent Tradie navigation and contract/negotiation workflow.

## Important repository state

The current repository contains only a README and is therefore not yet a runnable application. This document records the complete Figma implementation scope so the implementation can be added when the application source/stack is supplied.
