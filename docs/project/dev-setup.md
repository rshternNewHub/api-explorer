# Development Setup Guide

## Prerequisites
- Node.js (v18+)
- Git
- VS Code
- npm or pnpm

## Environment Setup
```bash
## Clone repository
git clone [repository-url]
cd api-explorer

## Install dependencies
npm install

## Start development server
npm run dev

## Project Scripts
The project uses a monorepo structure with several validation and development scripts running from the root `package.json`.

### Development Scripts
```bash
## Start all MFEs
npm run dev:all    # Runs all MFEs concurrently

## Individual MFE development
npm run dev:host   # Port 4000
npm run dev:analytics   # Port 4001
npm run dev:response-viewer  # Port 4002
npm run dev:request-builder  # Port 4003
npm run dev:collection-manager  # Port 4004

## Validation Scripts
### Type Checking
npm run type-check           # Checks all MFEs
npm run type-check:host      # Check specific MFE

### Linting
npm run lint                 # Lints all MFEs
npm run lint:host           # Lint specific MFE

### Formatting
npm run format              # Formats all code using Prettier

#Configuration Files
Project uses shared configuration files at the root level:

- .eslintrc.js - ESLint configuration
- .prettierrc - Prettier configuration
- tsconfig.json - TypeScript configuration

Each MFE extends these base configurations to maintain consistency while allowing for MFE-specific overrides if needed.