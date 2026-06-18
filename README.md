# OrangeHRM Test Automation Framework using Playwright

## Project Overview

This repository contains an end-to-end test automation framework for the OrangeHRM application built using Playwright. The framework emphasizes maintainability, reusability, and scalability through a structured architecture and modern automation design patterns.

The project leverages Playwright's capabilities along with Page Object Model (POM), reusable components, custom fixtures, storage state authentication, reporting, and failure diagnostics to create a robust and extensible automation solution.

The framework is designed to support reliable UI automation while providing a foundation for future enhancements such as multi-environment execution, advanced test data management, CI/CD integration, and role-based authentication strategies.

---

## Framework Architecture

### Test Execution Flow

```text
Tests
  ↓
Fixtures
  ↓
Page Objects
  ↓
Components
  ↓
Application Under Test
```

### Authentication Flow

```text
Setup Project
  ↓
Storage State Generation
  ↓
Authenticated Browser Context
  ↓
Business Test Execution
```

---

## Features Implemented

* Page Object Model (POM)
* Reusable UI Components
* Custom Playwright Fixtures
* Storage State Authentication
* Environment Configuration
* Test Data Management
* Playwright HTML Reports
* Screenshots on Failure
* Trace Collection for Debugging

---

## Project Structure

```text
.github/                 -> GitHub workflows
components/              -> Reusable UI components
pages/                   -> Page Objects
playwright/.auth/        -> Authentication state files
test-data/               -> Test data and test users
tests/                   -> Test specifications and setup project
playwright.config.js     -> Playwright configuration
package.json             -> Project dependencies and scripts
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Running Tests

### Execute All Tests

```bash
npx playwright test
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run Specific Test File

```bash
npx playwright test tests/addEmployee.spec.js
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

---

## Reporting & Diagnostics

The framework is configured to assist debugging and failure analysis through:

* Playwright HTML Reports
* Automatic Screenshots on Failure
* Trace Collection
* Test Step Reporting using `test.step()`

Open the HTML report using:

```bash
npx playwright show-report
```

---

## Planned Enhancements

* CI/CD Pipeline Validation
* Multi-Environment Execution
* Dynamic Test Data Generation
* Multi-Role Authentication Support
* Cross-Browser Execution Strategy
* Advanced Reporting and Analytics
* API Testing Integration

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
* GitHub Actions (Planned)
* OrangeHRM Demo Application

```
```
