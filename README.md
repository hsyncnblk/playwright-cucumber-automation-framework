# 🛒 E-Commerce Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 💡 Project Overview

This project is a modern **Test Automation Framework** built to validate end-to-end e-commerce flows.

Unlike traditional UI automation, this framework implements a **Hybrid Testing Strategy**. It validates user interactions on the frontend while simultaneously verifying data integrity via Backend/API simulations within the same test scenario.

## ✨ Key Features

* **Hybrid Verification (UI + API):** Checks if the "Order Completed" status in the UI matches the backend database record.
* **Page Object Model (POM):** Modular design using TypeScript classes for maintainability and reusability.
* **BDD with Cucumber:** Scenarios are written in Gherkin (English) to bridge the gap between QA and Business.
* **Auto-Capture on Failure:** Automatically captures screenshots and browser context if a test fails.
* **Environment Management:** Supports multi-environment execution (QA, Staging) via `.env` configuration.

## 🛠️ Tech Stack

* **Core:** Playwright
* **Language:** TypeScript
* **BDD:** CucumberJS
* **Reporting:** Allure / HTML
* **Utils:** `dotenv`, `fs-extra`

## 📂 Project Structure

The project follows industry-standard directory structure:

```text
src/
├── api/             # Backend simulation services (Hybrid Logic)
├── features/        # Test scenarios in Gherkin format
├── pages/           # Page Objects (UI Elements & Methods)
├── steps/           # Step definitions linking Gherkin to Code
├── support/         # Hooks (Setup, Teardown, Screenshots)
└── utils/           # Helper functions
