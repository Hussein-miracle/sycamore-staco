# Frontend Engineer Assessment – Nuxt 4
## Overview

This project was built as part of a frontend engineering assessment to demonstrate:

- UI nterpretation and interaction quality

- Thoughtful frontend architecture

- Data fetching patterns and state handling

- Performance awareness and pragmatic tradeoffs

The solution prioritizes clarity, scalability, and intentional simplicity, given the time constraints of the assessment.

## Tech Stack

 - Nuxt 4
 - Nuxt UI
 - TailwindCSS
 - motion-v (for minimal, intentional animations)
  
## Architecture & Design Philosophy

The project is structured around domain-oriented modules rather than purely technical layers utilizing the C4 model [Learn more](https://c4model.com/).

The guiding principle was:
```
“Simple by default, scalable by design.”
```

This allows the application to remain easy to reason about while still being adaptable if requirements grow.

### Key Decisions

 - Domain modules encapsulate related UI, logic, and services

 - Explicit imports over auto-import magic for clarity

 - Minimal global state to reduce coupling and unnecessary re-renders

- Animations used sparingly to enhance hierarchy and interaction, not decoration

Folder Structure
``` bash
/app
  /modules
    /landing
      components/
  /components
  /shared
    types/
    composables/
    utils/
  /layouts
  /assets
  /pages
  /stores
  /services
```
## Why this structure?

 - Modules represent business domains (e.g. landing page, data demo)

 - Shared contains only truly reusable elements

 - Encourages local reasoning and reduces cross-feature coupling

 - Makes scaling or extracting features easier without refactoring the entire app

## UI Interpretation Test
### Approach

- Recreated the core sections of the finance landing page as instructed

- Omitted blog, stats, and feature sections per requirements

- Focused on:

  - Visual hierarchy

  - Responsiveness

  - Accessible markup

  - Subtle interaction feedback

### Animations

Animations were intentionally limited to:

- Section entrance transitions

- Hover and focus interactions

This approach avoids performance regressions and improves perceived quality without affecting Lighthouse scores.