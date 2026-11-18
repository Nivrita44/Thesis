# Experimental Materials: LLM-Based Test Generation and Web Automation

## 1. Overview

This repository contains the experimental materials associated with a study evaluating Large Language Models (LLMs) in two software testing scenarios:

1. Automated test case generation for competitive programming problems.
2. Selenium-based web automation.

The study compares the performance of ChatGPT-4 and Claude 3.5 Sonnet under different prompting strategies and execution conditions.

The repository provides the prompts, problem files, JavaScript solutions, generated test cases, configuration files, testing scripts, and experimental outputs used in the evaluation.

## 2. Research Experiments

### Phase 1: Automated Test Case Generation

The first phase evaluates the ability of LLMs to generate JavaScript test cases for Codeforces programming problems.

Two categories of problems are considered:

- **Algorithmic problems:** Problems involving relatively straightforward computational tasks with defined input-output relationships.
- **Descriptive problems:** Problems with longer descriptions and more complex reasoning requirements.

Three prompting strategies are evaluated:

1. Problem statement only.
2. Source code only.
3. Problem statement and source code together.

The generated test cases are evaluated using the following metrics:

- Pass Rate
- Statement Coverage
- Branch Coverage
- Function Coverage
- Fully Passed Solutions
- Mutation Score

**Tools used:** Node.js, Jest, and StrykerJS.

### Phase 2: Selenium-Based Web Automation

The second phase evaluates the ability of the two LLMs to generate Selenium WebDriver scripts for browser-based tasks.

The experiment includes 50 predefined tasks across five websites. The tasks cover common web interactions, including:

- Registration and login
- Form submission
- Navigation and search
- Editing and deleting records
- Adding items to a cart
- Logging out

Two execution conditions are considered:

- With explicit time synchronization.
- Without explicit time synchronization.

The generated automation scripts are evaluated based on successful task execution.

**Tools used:** JavaScript, Node.js, Selenium WebDriver, and Google Chrome.

## 3. Repository Structure

The main directories and files are organized as follows:

| Directory / File | Description |
|---|---|
| `Claude/` | Materials associated with Claude experiments |
| `Passed_test_claude/` | Passed test outputs for Claude |
| `Passed_test_gpt/` | Passed test outputs for GPT-4 |
| `Selenium_testing/` | Selenium-based web automation experiment materials |
| `claude_coverage/` | Coverage results associated with Claude |
| `claude_logs/` | Claude experiment logs |
| `coverage/` | Code coverage outputs |
| `coverage-algorithm/` | Coverage results for algorithmic problems |
| `coverage-descriptive/` | Coverage results for descriptive problems |
| `logs/` | Experimental execution logs |
| `mutation-reports/` | Mutation testing reports |
| `problems-algorithm/` | Algorithmic programming problem files |
| `problems-descriptive/` | Descriptive programming problem files |
| `prompts/` | Prompt templates used in the experiments |
| `scripts/` | Scripts supporting experiment execution |
| `solutions-algorithm/` | JavaScript solutions for algorithmic problems |
| `solutions-descriptive/` | JavaScript solutions for descriptive problems |
| `tests-algorithm/` | Generated tests for algorithmic problems |
| `tests-descriptive/` | Generated tests for descriptive problems |
| `dataset.csv` | Experimental dataset |
| `generate_tests.js` | Test generation script |
| `generate_individual_coverage.js` | Script for generating individual coverage results |
| `jest.config.mjs` | Jest configuration |
| `claude_test.js` | Claude-related test execution script |
| `stryker*.config.json` | Stryker mutation testing configurations |
| `package.json` | Project dependencies and execution scripts |

Additional Stryker temporary directories and reports are retained as experimental outputs.

## 4. Software Requirements

The repository uses the following tools and software:

- Node.js
- JavaScript (ES Modules)
- Jest
- StrykerJS
- Selenium WebDriver
- Google Chrome
- ChromeDriver

The original experiments were conducted in a Windows 11 environment. The detailed experimental environment is described in the associated research paper.

**Note:** The dependency versions currently specified in `package.json` may differ from the versions used during the original experiments. Refer to the paper's reproducibility details when interpreting the reported results.

## 5. Installation

Clone or download the repository and install its dependencies:

```bash
git clone <repository-url>
cd Thesis
npm install
```

API credentials may be required for scripts that directly request responses from the LLM providers. Configure the required credentials locally before running those scripts. Do not commit API keys or other secrets to the repository.

## 6. Available Execution Scripts

The following commands are defined in `package.json`:

**Run problem tests:**

```bash
npm run test:problem
```

**Generate individual coverage reports:**

```bash
npm run coverage:split
```

**Run GPT-4 algorithmic mutation testing:**

```bash
npm run mutation:gpt:algo:prompt1
```

**Run Claude mutation testing:**

```bash
npm run mutation:claude:algorithm:prompt1
npm run mutation:claude:algorithm:prompt2
npm run mutation:claude:algorithm:prompt3
npm run mutation:claude:descriptive:prompt1
npm run mutation:claude:descriptive:prompt2
npm run mutation:claude:descriptive:prompt3
```

Additional configurations are available in the corresponding Stryker configuration files.

## 7. Experimental Reproducibility

The repository provides supporting materials for examining the experimental methodology and reported results, including:

- Prompt templates for the different input conditions.
- Programming problem descriptions and corresponding JavaScript solutions.
- Generated test cases.
- Jest and Stryker configuration files.
- Selenium automation materials.
- Coverage and mutation testing reports.
- Experimental execution logs.

The original experiments used ChatGPT-4 and Claude 3.5 Sonnet. The reported results represent the experimental conditions and model interfaces available during the study period.

The original experiment execution details, software environment, and evaluation methodology are described in the associated research paper.

