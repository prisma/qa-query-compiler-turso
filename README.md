# Prisma QA Query Compiler Turso

This project demonstrates the use of Prisma with the Query Compiler and Driver Adapters preview features.
It connects to a Turso database using the [`@prisma/adapter-libsql`](https://www.npmjs.com/package/@prisma/adapter-libsql) adapter.

## Prerequisites

*   Node.js (>= 18.x)
*   pnpm (>= 8.x)
*   Turso database (you can sign up at [Turso](https://turso.tech/))

## Setup

1.  **Clone the repository:**
  ```bash
  git clone https://github.com/prisma/qa-query-compiler-turso.git
  cd qa-query-compiler-turso
  ```

2.  **Install dependencies:**
  ```bash
  pnpm install
  ```

3.  **Generate Prisma Client:**
  ```bash
  pnpm prisma generate
  ```

4.  **Set up environment variables:**
  Create a [`.env`](./.env) file in the root of the project with the following variables:
  ```env
  DATABASE_URL="your_turso_database_url"
  DATABASE_AUTH_TOKEN="your_turso_auth_token"
  ```
  Replace `your_turso_database_url` and `your_turso_auth_token` with your actual Turso database URL and authentication token.

## Prisma Setup Description

*   **Schema:** The Prisma schema is located at [`prisma/schema.prisma`](./prisma/schema.prisma).
*   **Preview Features:** This project uses the `queryCompiler` and `driverAdapters` preview features.
  ```prisma
  // prisma/schema.prisma
  generator client {
    provider        = "prisma-client"
    output          = "../.generated/prisma"
    previewFeatures = ["queryCompiler", "driverAdapters"]
  }
  ```
*   **Adapter:** The project uses [`@prisma/adapter-libsql`](https://www.npmjs.com/package/@prisma/adapter-libsql) to connect to Turso. The adapter is configured in [`src/adapter.ts`](./src/adapter.ts) and integrated via [`prisma.config.ts`](./prisma.config.ts) for migrations and [`src/index.ts`](./src/index.ts) for the client.

## Running the Project

*   **Development:** To run the application (e.g., to execute queries defined in [`src/index.ts`](./src/index.ts)):
  ```bash
  pnpm dev
  ```

## Building the Project

*   To compile the TypeScript source code:
  ```bash
  pnpm build
  ```

## Key Files

*   [`prisma/schema.prisma`](./prisma/schema.prisma): Defines the database schema and Prisma Client generator configuration.
*   [`prisma.config.ts`](./prisma.config.ts): Configures Prisma for features like migrations when using driver adapters.
*   [`src/index.ts`](./src/index.ts): The main entry point of the application, demonstrating Prisma Client usage.
*   [`src/adapter.ts`](./src/adapter.ts): Contains the setup for the LibSQL (Turso) adapter.
*   [`src/env.ts`](./src/env.ts): Defines the TypeScript types for environment variables.
*   [`.env`](./.env): Stores environment variables (DATABASE_URL, DATABASE_AUTH_TOKEN). **Note: This file should be in `.gitignore` and not committed to version control.**
*   [`package.json`](./package.json): Lists project dependencies and scripts.

