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
