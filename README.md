# TypeScript Integration with Tools and Frameworks Lab

A comprehensive hands-on repository demonstrating how TypeScript integrates with modern development tools, testing frameworks, frontend libraries, backend runtimes, and large-scale project architectures.

This project was created as part of a TypeScript learning path and focuses on practical implementation rather than theory alone. Each section contains isolated examples that showcase real-world TypeScript workflows used in modern software development.

---

# Objectives

The primary goals of this repository are to:

* Configure TypeScript with modern build tools such as Vite and Webpack
* Understand transpilation versus type checking workflows
* Integrate TypeScript with Jest for testing
* Build strongly typed React components
* Explore Angular's TypeScript-first architecture
* Develop Node.js applications using TypeScript
* Create type-safe Express APIs
* Learn TypeScript Project References for scalable monorepos
* Understand incremental compilation and build optimization

---

# Repository Structure

```text
typescript-tools-frameworks-lab/
│
├── 01-vite-typescript/
├── 02-webpack-ts-loader/
├── 03-isolated-modules/
│
├── 04-jest-ts-jest/
├── 05-jest-mocks/
├── 06-jest-path-alias/
│
├── 07-react-typed-button/
├── 08-react-usestate-user/
├── 09-angular-service/
│
├── 10-node-http-server/
├── 11-nodenext-imports/
├── 12-express-typed-route/
│
├── 13-project-references/
│   ├── shared/
│   └── app/
│
└── README.md
```

---

# Module Overview

---

## 1. TypeScript with Vite

### Concepts Covered

* Vite TypeScript setup
* esbuild transpilation
* Type checking versus transpilation
* Fast development server workflow

### Key Learning

Vite uses esbuild to transpile TypeScript files but does not perform full type checking during development.

### Demonstration

A deliberate type error is introduced to show:

* Vite dev server still starts successfully
* TypeScript compiler catches the error separately

### Commands

```bash
npm install
npm run dev
npx tsc --noEmit
```

---

## 2. TypeScript with Webpack and ts-loader

### Concepts Covered

* Webpack configuration
* ts-loader integration
* Bundling TypeScript applications
* Module resolution

### Key Learning

Unlike Vite, ts-loader uses the TypeScript compiler and performs type checking during the build process.

### Commands

```bash
npm install
npx webpack
node dist/bundle.js
```

---

## 3. Isolated Modules

### Concepts Covered

* isolatedModules
* File-level transpilation
* Compatibility with esbuild and Babel

### Key Learning

Certain TypeScript patterns that require cross-file analysis become invalid when isolatedModules is enabled.

### Example

```ts
export { User } from "./types";
```

Correct form:

```ts
export type { User } from "./types";
```

---

# TypeScript with Jest

---

## 4. Jest + ts-jest

### Concepts Covered

* Jest setup with TypeScript
* ts-jest configuration
* Typed unit tests

### Demonstration

Testing:

```ts
add(a: number, b: number): number
```

TypeScript validates incorrect arguments before test execution.

### Commands

```bash
npm test
```

---

## 5. Typed Jest Mocks

### Concepts Covered

* jest.mocked()
* Typed async mocks
* Promise-based testing

### Key Learning

Mocked functions preserve TypeScript type information and provide access to:

```ts
mockResolvedValue()
mockRejectedValue()
mockReturnValue()
```

without using any.

---

## 6. Jest Path Aliases

### Concepts Covered

* tsconfig path mapping
* moduleNameMapper
* Alias resolution

### Example

```ts
import { helper } from "@utils/helper";
```

### Key Learning

Jest and TypeScript must share identical alias mappings.

---

# TypeScript with React

---

## 7. Typed React Components

### Concepts Covered

* Functional components
* Props typing
* Component contracts

### Example

```ts
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

### Benefits

* Compile-time validation
* Autocomplete support
* Safer refactoring
* Self-documenting APIs

---

## 8. Typed State Management

### Concepts Covered

* useState generics
* Nullable state
* Type narrowing
* useEffect

### Example

```ts
const [user, setUser] =
  useState<User | null>(null);
```

### Key Learning

TypeScript narrows nullable state after runtime guards.

---

# TypeScript with Angular

---

## 9. Angular Service Injection

### Concepts Covered

* @Injectable()
* Dependency Injection
* Typed Observables
* Angular services

### Example

```ts
getUsers(): Observable<User[]>
```

### Key Learning

Angular leverages TypeScript metadata and decorators to support dependency injection and compile-time validation.

---

# TypeScript with Node.js

---

## 10. Typed HTTP Server

### Concepts Covered

* Built-in Node.js HTTP module
* IncomingMessage
* ServerResponse
* @types/node

### Example

```ts
(req: IncomingMessage,
 res: ServerResponse)
```

### Key Learning

Node runtime APIs require type definitions from @types/node.

---

## 11. NodeNext Module System

### Concepts Covered

* ES Modules
* NodeNext
* Explicit file extensions

### Example

```ts
import { user } from "./user.js";
```

### Key Learning

NodeNext aligns TypeScript with Node.js ESM behavior.

---

## 12. Typed Express Routes

### Concepts Covered

* Request generics
* Response typing
* Typed request bodies

### Example

```ts
Request<{}, {}, CreateUserBody>
```

### Benefits

* Safer API development
* Better IntelliSense
* Compile-time validation

---

# TypeScript Project References

---

## 13. Multi-Package TypeScript Architecture

### Concepts Covered

* Project References
* composite projects
* declaration generation
* incremental builds

### Structure

```text
shared
  └── reusable utilities

app
  └── consumes shared package
```

### Key Learning

Large TypeScript codebases can be split into independent packages while preserving fast incremental builds.

---

## Features Demonstrated

### Project References

```json
{
  "references": [
    {
      "path": "../shared"
    }
  ]
}
```

### Composite Projects

```json
{
  "compilerOptions": {
    "composite": true
  }
}
```

### Declaration Generation

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

### Incremental Builds

```bash
npx tsc -b
```

### Build Analysis

```bash
npx tsc -b --verbose
```

---

# Technologies Used

* TypeScript
* Vite
* Webpack
* ts-loader
* Jest
* ts-jest
* React
* Angular
* Node.js
* Express
* ES Modules
* Project References

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd typescript-tools-frameworks-lab
```

Install dependencies inside the individual exercise folders as required.

---

# Learning Outcomes

After completing this repository, you will understand:

* How modern bundlers process TypeScript
* The difference between transpilation and type checking
* How TypeScript integrates with testing frameworks
* Strongly typed React development patterns
* Angular's TypeScript-first architecture
* Type-safe Node.js and Express applications
* Module systems in modern JavaScript
* Scalable TypeScript project organization using Project References

---

# Future Improvements

Potential enhancements include:

* TypeScript with Next.js
* TypeScript with Vitest
* TypeScript with ESLint
* TypeScript with Prettier
* TypeScript with SWC
* TypeScript with Turborepo
* TypeScript Monorepo Architecture
* TypeScript Build Performance Benchmarking

---

# Author

**Nikhil Pandey**

Computer Science Engineering (AI/ML)

Frontend & Full Stack Developer

TypeScript | React | Next.js | Node.js | Express

---

# License

This repository is intended for educational and learning purposes.