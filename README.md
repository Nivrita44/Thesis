
# Evaluating Large Language Models for Automated Test Case Generation and Web Automation

This repository contains the experimental materials and implementation associated with the research study **"Evaluating Large Language Models for Automated Test Case Generation and Web Automation."**

The study presents a comparative empirical evaluation of ChatGPT-4 and Claude 3.5 Sonnet across two software testing tasks: automated test case generation and Selenium-based web automation.

The repository preserves the prompts, benchmark problems, reference implementations, LLM-generated test cases, testing configurations, execution scripts, and experimental results used in the study.


---

## Table of Contents

- [1. Research Overview](#1-research-overview)
- [2. Experimental Design](#2-experimental-design)
  - [2.1. Automated Test Case Generation](#21-automated-test-case-generation)
  - [2.2. Selenium-Based Web Automation](#22-selenium-based-web-automation)
- [3. Evaluation Metrics](#3-evaluation-metrics)
- [4. Repository Structure](#4-repository-structure)
- [5. Technologies and Requirements](#5-technologies-and-requirements)
- [6. Installation and Setup](#6-installation-and-setup)
- [7. Running the Experiments](#7-running-the-experiments)
- [8. Experimental Artifacts](#8-experimental-artifacts)
- [9. Reproducibility](#9-reproducibility)


---

## 1. Research Overview

Large Language Models have demonstrated potential for assisting software developers with various software engineering activities, including software testing. However, the effectiveness of LLM-generated tests and their ability to perform browser-based automation require systematic evaluation.

This study investigates these capabilities through two complementary experimental phases.

Two LLMs are considered:

- **ChatGPT-4**
- **Claude 3.5 Sonnet**

The first phase examines the quality of automatically generated test cases using programming problems. The second phase investigates the models' ability to generate and execute Selenium scripts for predefined web application tasks.

The objective is to evaluate the models under different prompting conditions and execution settings using measurable testing criteria.

## 2. Experimental Design

### 2.1. Automated Test Case Generation

The first phase evaluates the ability of LLMs to generate JavaScript test cases for programming problems collected from Codeforces.

The benchmark consists of 100 programming problems divided into two categories:

- **Algorithmic Problems (50):** Problems involving computational tasks, algorithmic operations, and well-defined input-output relationships.
- **Descriptive Problems (50):** Problems involving descriptive requirements and different logical problem-solving scenarios.

#### Prompting Configurations

Three prompting configurations are used to examine how the information provided to an LLM affects the generated test cases.

| Configuration | Prompt Input |
|---|---|
| Prompt 1 | Problem statement only |
| Prompt 2 | Source code only |
| Prompt 3 | Problem statement and source code |

For each problem, the models generate test cases independently under the three prompting configurations.

The generated test cases are executed against the corresponding reference JavaScript solutions. This allows the evaluation to examine both the correctness of generated tests and their effectiveness in exercising the target implementations.

#### Test Generation and Execution

The generated test cases are organized according to the problem category, model, and prompting configuration.

Jest is used to execute the generated tests and collect code coverage information. StrykerJS is used to perform mutation testing and evaluate the fault-detection capability of the generated test suites.

Test failures are retained as experimental outcomes rather than being modified to force successful execution. This preserves the original model-generated results for comparative analysis.

### 2.2. Selenium-Based Web Automation

The second phase evaluates the ability of ChatGPT-4 and Claude 3.5 Sonnet to generate Selenium WebDriver scripts for browser-based automation tasks.

The experiment consists of 50 predefined tasks distributed across five websites.

The tasks represent common interactions found in web applications, including:

- User registration and login
- Form submission
- Website navigation and search
- Editing and deleting records
- Adding products to a shopping cart
- Logging out

#### Execution Conditions

Two execution conditions are considered:

1. **With explicit time synchronization:** The generated automation scripts incorporate explicit synchronization to coordinate browser interactions with page loading and element availability.
2. **Without explicit time synchronization:** The generated scripts execute without the additional explicit synchronization mechanisms.

The generated Selenium scripts are executed in a browser environment, and their performance is assessed based on the successful completion of the predefined tasks.

The Selenium experiment materials are maintained separately under the `Selenium_testing/` directory.

## 3. Evaluation Metrics

The first experimental phase uses the following metrics to evaluate the generated test suites.

| Metric | Description |
|---|---|
| Pass Rate | Measures the proportion of generated test cases that pass when executed against the reference solution. |
| Statement Coverage | Measures the percentage of executable statements exercised by the generated tests. |
| Branch Coverage | Measures the percentage of decision branches exercised by the generated tests. |
| Function Coverage | Measures the percentage of functions invoked during test execution. |
| Fully Passed Solutions | Counts the solutions for which all generated test cases pass. |
| Mutation Score | Measures the proportion of non-equivalent mutants detected by the generated test suites. |

For the Selenium-based experiment, task execution success is used to assess whether the generated automation scripts complete their predefined objectives.

The metrics are analyzed comparatively across the evaluated models and experimental conditions.

## 4. Repository Structure

The repository is organized into directories containing the benchmark problems, reference solutions, generated test cases, model-specific outputs, evaluation configurations, and experimental results.

The main directory structure is presented below.


```text
Thesis/
│
├── Claude/
├── Passed_test_claude/
├── Passed_test_gpt/
│
├── Selenium_testing/
├── scripts/
│
├── results/
│   ├── prompts/
│   ├── problems-algorithm/
│   ├── problems-descriptive/
│   ├── solutions-algorithm/
│   ├── solutions-descriptive/
│   ├── tests-algorithm/
│   ├── tests-descriptive/
│   ├── coverage/
│   ├── coverage-algorithm/
│   ├── coverage-descriptive/
│   ├── claude_coverage/
│   ├── claude_logs/
│   ├── logs/
│   ├── mutation-reports/
│   ├── reports/
│   │   └── mutation/
│   └── stryker-tmp-*/
│
├── dataset.csv
├── generate_tests.js
├── generate_individual_coverage.js
├── claude_test.js
├── jest.config.mjs
├── babel.config.json
├── stryker*.config.json
├── run_coverage.ps1
├── run_single_test.ps1
├── package.json
├── package-lock.json
├── .gitignore
├── .strykerignore
├── .zenodo.json
├── MUTATION_TESTING_README.md
└── README.md
```

The `stryker-tmp-*` directories represent intermediate artifacts created during mutation testing. They are not primary source directories.

### Directory Descriptions

| Directory / File | Purpose |
|---|---|
| `Claude/` | Claude-related experimental materials. |
| `Passed_test_claude/` | Test outputs associated with Claude. |
| `Passed_test_gpt/` | Test outputs associated with ChatGPT-4. |
| `Selenium_testing/` | Materials for the Selenium-based web automation experiment. |
| `problems-algorithm/` | Algorithmic programming problem descriptions. |
| `problems-descriptive/` | Descriptive programming problem descriptions. |
| `solutions-algorithm/` | Reference JavaScript solutions for algorithmic problems. |
| `solutions-descriptive/` | Reference JavaScript solutions for descriptive problems. |
| `tests-algorithm/` | Generated test cases for algorithmic problems. |
| `tests-descriptive/` | Generated test cases for descriptive problems. |
| `prompts/` | Prompt templates used for test generation. |
| `scripts/` | Supporting scripts for test execution and experimental processing. |
| `coverage/` | General code coverage outputs. |
| `coverage-algorithm/` | Coverage reports for algorithmic problems. |
| `coverage-descriptive/` | Coverage reports for descriptive problems. |
| `claude_coverage/` | Coverage results associated with Claude. |
| `claude_logs/` | Claude experiment execution logs. |
| `logs/` | Experimental execution logs. |
| `mutation-reports/` | Mutation testing reports. |
| `reports/mutation/` | Additional mutation testing reports. |
| `dataset.csv` | Experimental dataset. |
| `generate_tests.js` | Test generation script. |
| `generate_individual_coverage.js` | Script for generating individual coverage reports. |
| `claude_test.js` | Claude-related test execution script. |
| `jest.config.mjs` | Jest configuration. |
| `babel.config.json` | Babel configuration. |
| `stryker*.config.json` | StrykerJS configurations for different experimental conditions. |
| `package.json` | Node.js dependencies and available execution scripts. |
| `package-lock.json` | Locked dependency versions. |

## 5. Technologies and Requirements

The first experimental phase uses the following tools and technologies:

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment. |
| npm | Dependency installation and script execution. |
| JavaScript (ES Modules) | Implementation of reference solutions and test scripts. |
| Jest | Test execution and code coverage measurement. |
| StrykerJS | Mutation testing. |
| Babel | JavaScript transformation and compatibility support. |
| OpenAI SDK | API integration for ChatGPT-related workflows. |
| Anthropic SDK | API integration for Claude-related workflows. |

The Selenium experiment additionally uses:

- Selenium WebDriver
- Google Chrome
- ChromeDriver

**Original experimental environment:** Windows 11.

The precise software versions and configurations used during the experiments should be taken from the associated research paper and the relevant project configuration files.

## 6. Installation and Setup

### 6.1. Clone the Repository

```bash
git clone https://github.com/Nivrita44/Thesis.git
cd Thesis
npm install
```

To regenerate LLM outputs, create a `.env` file in the repository root (never commit it):

```bash
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```

### **6.2. Selenium Environment**

Both GPT and Claude Selenium experiments follow the same setup and execution procedure. Navigate to the respective project directory and install the required dependencies.

```
npm install
node path/to/(webname).test.js
```

For example, to execute the DemoQA test:

```
node e2e_tests/demoqa.test.js
```

## 7. Running the Experiments

The experimental workflow consists of test-case generation, test execution, coverage analysis, and mutation testing.

### 7.1. Generate Test Cases

The generation scripts use `dataset.csv` to identify the problem statements and their corresponding reference solutions. Update the problem number in the CSV to select the problem for test generation.

For example:

```csv
problem_path,solution_path
16.txt,16.js
```

Run the appropriate script from the repository root:

```bash
# GPT-4.1
node generate_tests.js

# Claude 3.5 Sonnet
node claude_test.js
```

Each script processes the entries in `dataset.csv` and generates test cases using the three prompting configurations. Ensure the respective API key is configured in `.env`.

### 7.2. Execute Generated Tests

Run the problem test runner:

```bash
npm run test:problem
```

This executes `scripts/run_problem_tests.js` against the reference solutions.

### 7.3. Generate Individual Coverage Reports

Generate separate coverage reports for the test suites:

```bash
npm run coverage:split
```

This runs `generate_individual_coverage.js` and produces individual coverage results.

### 7.4. Run Mutation Testing

Mutation testing is performed using StrykerJS to evaluate the effectiveness of the generated test suites.

**ChatGPT-4.1**

```bash
npm run mutation:gpt:algo:prompt1
npm run mutation:gpt:algo:prompt2
npm run mutation:gpt:algo:prompt3
npm run mutation:gpt:descriptive:prompt1
npm run mutation:gpt:descriptive:prompt2
npm run mutation:gpt:descriptive:prompt3
```

**Claude 3.5 Sonnet**

```bash
npm run mutation:claude:algorithm:prompt1
npm run mutation:claude:algorithm:prompt2
npm run mutation:claude:algorithm:prompt3
npm run mutation:claude:descriptive:prompt1
npm run mutation:claude:descriptive:prompt2
npm run mutation:claude:descriptive:prompt3
```

Additional ChatGPT mutation configurations can be executed directly using Stryker:

```bash
npx stryker run stryker-descriptive-prompt1.config.json
```

Mutation reports are saved in `results/mutation-reports/` in HTML and JSON formats.

For configuration details and troubleshooting, see [`MUTATION_TESTING_README.md`](MUTATION_TESTING_README.md).

## 8. Experimental Artifacts

The repository includes the materials produced and used throughout the experiments.

These artifacts include:

- Original programming problem descriptions.
- Reference JavaScript implementations.
- Prompt templates for the three prompting configurations.
- Generated test cases from both evaluated models.
- Test execution outputs.
- Statement, branch, and function coverage reports.
- StrykerJS mutation testing configurations and reports.
- Experimental logs and datasets.
- Selenium WebDriver scripts and associated execution materials.

These resources are provided to support the inspection of the experimental process and the analysis of the reported findings.

## **9. Reproducibility**

- **LLM versions:** The results are based on the specific GPT-4 and Claude 3.5 Sonnet versions used in the experiments. Newer model versions may produce different results.
- **Model behavior:** LLM-generated outputs may vary between runs, even when using the same prompts.
- **Dependencies:** Different versions of Node.js, Jest, StrykerJS, Selenium WebDriver, or other dependencies may affect the results.
- **Execution environment:** Browser and ChromeDriver versions, operating systems, and system configurations may influence test execution.
- **Website changes:** The Selenium experiments use third-party websites. Changes to their interfaces or functionality may affect the execution of previously generated scripts.
- **API availability:** Re-running the experiments requires access to the relevant model APIs, which may have changes in availability, pricing, or behavior.
- **Original results:** The generated scripts and recorded results are included in the repository for reference and comparison with future experiments.
