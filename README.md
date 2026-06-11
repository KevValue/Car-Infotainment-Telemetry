# Telemetry

## Abstract

This project is a fully typed, feature-modular Next.js application designed to demonstrate modern frontend engineering practices. The goal is to show how a scalable, maintainable, production-ready codebase can be organized from the ground up using strong TypeScript discipline and feature-based architecture.

## Project Goal

I wanted to build an extensible application that is built to scale. I chose must haves
1. Feature based architecture
2. Strong TypeScript and Data Modeling
3. Clear separation of local and global components with Zustand
4. Remote data fetching and state management with TanStack Query
5. URL state management with Nuqs.
6. Zod validated schemas for run time safety and consistency.
7. Clear separation between domain, API, and UI layers (Hooks, views)

## About me

My thoughts going into this project were honest, to be intentional about my learning, to be hands on.

I mainly wanted dive deep into architectural patterns and design choices during development, this gave me a chance to see my problem solving skills in real time.

Before getting the chance to translate skills into enterprise settings, I wanted to explore and master the underlying technologies and experiment with complex data flows on the front end side.

This includes first iteration thinking and remaining open to production ready patterns as the code base evolved.

This codebase is a reflection of:

- my understanding of modern front end architecture (always open to team nuances)
- my ability to design maintainable systems and adapt to existing ones.
- my focus on clarity and structure, and overall the developer experience.
- my continued interest in building real, production-ready patterns.

This project is both a portfolio piece and a personal benchmark for how I approach engineering problems.

### Core System Features (updated on every major revision)

- Structured Logging Pipeline and Correlation IDs

### Domain Features

- Telemetry store: includes multiple speed mocks (featured on front page). First iteration of a core workflow.
- Vehicle control store: provides interactive controls for climate and gear across multiple zones.

### UI Patterns

- Consistent Grid System: a unified and responsive grid and grid item component architecture
- Standard Gauge and Card component follows atomic design principles, normalized data with math primitives

### Architectural Decision

- Dynamic Component Registry & Factory Pattern
My Approach: Instead of hard coding conditional if and else ui blocks, I made changes more dynamic by having a data array called Card Registry represent the layout components. This registry is connected to a Flag system, giving even more control with environmental variables. The factory dynamically instantiates the correct component type and injects context-specific props at runtime.
Benefit: High maintainability: Adding a new card style requires zero changes to layout components; you simply add it to the registry map.

- Context-Aware Feature Toggling
Implemented a feature flag system controlled by environmental variables
Benefits: Allows for high velocity in development, isolating incomplete features, experimental features from complete features. Great for iteration. Allows for safe code merging, especially if other developers want hide unfinished features behind feature flags.

- Slot based Layout Architecture
My approach: I utilize a layout pattern called zones rather than a monolithic declarative layout that is  unorganized because of deep nesting. This is very similar to Atomic Architecture, where there's a separation of concerns at every layer.
Benefits: strict separation of concerns by separating the data from the layout handling, essentially decoupling data from the layout. Also prevents UI from shifting and stabilizes the UI. Prevents cumulative layout shift, where too much data destabilizes the UI. Doing so, I know have an idea of when I need to build complex customized cards for specific telemetry edge cases that have a high volume of data.
