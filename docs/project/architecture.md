# API Explorer Architecture

## System Overview
API Explorer uses a hybrid architecture combining Micro-Frontends and Plugin systems.

### Core Components
1. Shell Application (Host)
   - Main application container
   - Routing and navigation
   - State management
   - Plugin registry

2. Micro-Frontends
   - Request Builder
   - Response Viewer
   - Collection Manager
   - Analytics Dashboard

3. Plugin System
   - Authentication plugins
   - Request/Response transformers
   - Validators
   - Analytics plugins

## Technical Stack
- React 18
- TypeScript
- Module Federation
- Redux Toolkit
- Azure Cloud Services

## Architecture Diagrams
[Placeholder for architecture diagrams]

## Component Communication
### MFE Communication
```typescript
interface MFEBridge {
  emit(event: string, payload: any): void;
  subscribe(event: string, callback: Function): void;
}

## Plugin System
interface PluginRegistry {
  register(plugin: Plugin): void;
  execute(hookName: string, context: any): Promise<any>;
}

## Deployment Architecture
- Azure Static Web Apps
- Azure Functions
- Azure Storage
- Azure AD B2C

## Micro-Frontend Setup

### Port Configuration
- Host Application: 4000
- Analytics MFE: 4001
- Response Viewer MFE: 4002
- Request Builder MFE: 4003
- Collection Manager MFE: 4004

### Development Scripts
The project uses concurrently to run all MFEs in development:
```npm run dev:all``` will start all applications

### Project Structure

api-explorer/
├── apps/
│   ├── host/               # Main shell application
│   ├── request-builder/    # Request creation and management
│   ├── response-viewer/    # Response display and analysis
│   ├── collection-manager/ # API collections and organization
│   └── analytics/         # Usage and performance analytics

For detailed information about development scripts, validation, and tooling setup, see [Development Setup](./dev-setup.md).
