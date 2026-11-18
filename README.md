G :
# Evaluating Large Language Models for Automated Test Case Generation and Web Automation

This repository contains the experimental materials and implementation associated with the research study **"Evaluating Large Language Models for Automated Test Case Generation and Web Automation."**

The study presents a comparative empirical evaluation of ChatGPT-4 and Claude 3.5 Sonnet across two software testing tasks: automated test case generation and Selenium-based web automation.

The repository preserves the prompts, benchmark problems, reference implementations, LLM-generated test cases, testing configurations, execution scripts, and experimental results used in the study.

**Repository:** https://github.com/Nivrita44/Thesis

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
- [10. Citation](#10-citation)
- [11. License](#11-license)

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
│
├── problems-algorithm/
├── problems-descriptive/
│
├── solutions-algorithm/
├── solutions-descriptive/
│
├── tests-algorithm/
├── tests-descriptive/
│
├── prompts/
├── scripts/
│
├── coverage/
├── coverage-algorithm/
├── coverage-descriptive/
├── claude_coverage/
│
├── claude_logs/
├── logs/
│
├── mutation-reports/
├── reports/
│   └── mutation/
│
├── stryker-tmp-*/
│
├── dataset.csv
├── generate_tests.js
├── generate_individual_coverage.js
├── claude_test.js
│
├── jest.config.mjs
├── babel.config.json
│
├── stryker*.config.json
│
├── run_coverage.ps1
├── run_single_test.ps1
│
├── package.json
├── package-lock.json
├── .gitignore
├── .strykerignore
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
```

### 6.2. Install Dependencies

The root directory contains `package.json` and `package-lock.json`.

To install the dependencies specified in the lock file, run:

```bash
npm ci
```

Alternatively, use `npm install` if you need to resolve or update dependencies.

### 6.3. API Configuration

Some scripts support direct communication with LLM providers through their respective SDKs.

If you intend to execute API-based generation workflows, configure the required API credentials locally.

Do not include API keys, access tokens, or other sensitive credentials in the repository.

**Note:** API credentials are not required merely to inspect or execute previously generated test cases and available experimental artifacts.

### 6.4. Selenium Environment

The Selenium experiment is maintained separately in `Selenium_testing/`.

Before executing those experiments, ensure that the required Node.js dependencies, Selenium WebDriver configuration, Google Chrome, and compatible ChromeDriver are available.

Refer to the experiment-specific files and configurations within that directory for the corresponding setup and execution instructions.

## 7. Running the Experiments

The following commands are defined in the root `package.json` for the automated test generation and evaluation workflow.

### 7.1. Execute Generated Problem Tests

```bash
npm run test:problem
```

This command executes the problem test runner:

```text
scripts/run_problem_tests.js
```

### 7.2. Generate Individual Coverage Reports

```bash
npm run coverage:split
```

This command runs `generate_individual_coverage.js` to generate individual coverage results.

### 7.3. Run Mutation Testing

Mutation testing is configured using StrykerJS with separate configurations for the evaluated models, problem categories, and prompting conditions.

**ChatGPT-4 – Algorithmic Problems (Prompt 1):**

```bash
npm run mutation:gpt:algo:prompt1
```

**Claude 3.5 Sonnet – Algorithmic Problems:**

```bash
npm run mutation:claude:algorithm:prompt1
npm run mutation:claude:algorithm:prompt2
npm run mutation:claude:algorithm:prompt3
```

**Claude 3.5 Sonnet – Descriptive Problems:**

```bash
npm run mutation:claude:descriptive:prompt1
npm run mutation:claude:descriptive:prompt2
npm run mutation:claude:descriptive:prompt3
```

Each command invokes its corresponding StrykerJS configuration file.

Additional configurations are available in the repository for other experimental conditions. Their availability as configuration files does not necessarily mean that a dedicated npm script is defined for each one.

For further information about mutation testing, see [MUTATION_TESTING_README.md](MUTATION_TESTING_README.md).

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

## 9. Reproducibility

Reproducibility is an important consideration in empirical software engineering research.

To support independent examination of the study, this repository preserves the primary experimental inputs, generated artifacts, testing configurations, and evaluation outputs.

However, reproducing the exact experimental results may depend on several factors:

- Availability of the original LLM versions used in the study.
- Model API behavior and provider-side changes.
- Dependency and runtime versions.
- Browser and ChromeDriver compatibility.
- Website availability and changes to web application interfaces.
- Execution environment and timing conditions.

Consequently, previously generated artifacts provide a reference for examining the reported experiments, while rerunning the complete workflow may require recreating the original experimental environment.

The research paper provides the detailed methodology, experimental settings, and analysis of the results.

## 10. Citation

If you use this repository or its experimental materials in your research, please cite the associated publication:

```text
[Author(s)]. (Year). Evaluating Large Language Models for Automated
Test Case Generation and Web Automation.
[Conference/Journal Name].
[DOI or Publication URL]
```

The citation information will be updated with the final publication details.

## 11. License

Please refer to the repository's `LICENSE` file for the terms governing the use, distribution, and modification of the materials.

If no license file is provided, permission to reuse or redistribute the repository contents should not be assumed.


Cl :
<div align="center">

# Evaluating Large Language Models for Automated Test Case Generation and Web Automation

**Replication package for a two-phase empirical comparison of ChatGPT-4 and Claude 3.5 Sonnet**

![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30.x-C21325?logo=jest&logoColor=white)
![StrykerJS](https://img.shields.io/badge/StrykerJS-9.x-E74C3C)
![Selenium](https://img.shields.io/badge/Selenium-WebDriver-43B02A?logo=selenium&logoColor=white)
![License](https://img.shields.io/badge/license-TODO-lightgrey)
<!-- TODO: add paper badge, e.g. ![Paper](https://img.shields.io/badge/paper-DOI-blue) -->

[Paper](TODO_PAPER_LINK) · [Dataset](dataset.csv) · [Prompts](prompts/) · [Citation](#citation)

</div>

---

## Table of Contents

1. [Overview](#1-overview)
2. [Research Questions](#2-research-questions)
3. [Experimental Design](#3-experimental-design)
4. [Repository Structure](#4-repository-structure)
5. [Requirements](#5-requirements)
6. [Installation](#6-installation)
7. [Reproducing the Experiments](#7-reproducing-the-experiments)
8. [Key Results](#8-key-results)
9. [Reproducibility Notes and Limitations](#9-reproducibility-notes-and-limitations)
10. [Citation](#citation)
11. [License](#license)
12. [Contact](#contact)

---

## 1. Overview

This repository is the replication package for the paper **"Evaluating Large Language Models for Automated Test Case Generation and Web Automation"**. It contains the prompts, problem sets, reference solutions, LLM-generated tests and scripts, configuration files, execution logs, and coverage and mutation reports used in the study.

The study compares **ChatGPT-4** and **Claude 3.5 Sonnet** in two phases:

| Phase | Task | Evaluation |
|---|---|---|
| **1** | Generate JavaScript unit tests for algorithmic and descriptive programming problems | Pass rate, statement / branch / function coverage, fully passed solutions, mutation score |
| **2** | Generate Selenium WebDriver (JavaScript) scripts for web interaction tasks | Task success, with and without explicit time-thread synchronization |

## 2. Research Questions

<!-- TODO: replace with the exact RQs from the paper -->

- **RQ1.** How effective are ChatGPT-4 and Claude 3.5 Sonnet at generating correct, high-coverage test cases for algorithmic and descriptive problems?
- **RQ2.** How does the prompt configuration (problem statement only, source code only, or both) affect test quality?
- **RQ3.** How reliably can each model generate Selenium automation scripts for real web tasks, and how does explicit synchronization affect success?

## 3. Experimental Design

### Phase 1: Automated Test Case Generation

- **Problem categories:** algorithmic problems and descriptive (long-statement, reasoning-heavy) problems.
- **Prompt configurations:**

  | ID | Input given to the model |
  |---|---|
  | `prompt1` | Problem statement only |
  | `prompt2` | Source code only |
  | `prompt3` | Problem statement + source code |

  <!-- TODO: confirm the prompt1/2/3 mapping above matches the files in prompts/ -->

- **Pipeline:** `prompts/` → LLM → generated tests (`tests-*`) → Jest execution (pass rate, coverage) → StrykerJS (mutation score).
- **Metrics:** pass rate, statement coverage, branch coverage, function coverage, fully passed solutions, mutation score.

### Phase 2: Selenium-Based Web Automation

- **Scope:** 5 websites × 10 tasks = 50 web interaction tasks (registration/login, form submission, navigation/search, edit/delete records, add to cart, logout).
- **Conditions:** (a) with explicit time-thread synchronization, (b) without.
- **Metric:** successful end-to-end task execution.

## 4. Repository Structure

```text
.
├── prompts/                    # Prompt templates for the three input configurations
├── problems-algorithm/         # Algorithmic problem statements
├── problems-descriptive/       # Descriptive problem statements
├── solutions-algorithm/        # JavaScript reference solutions (algorithmic)
├── solutions-descriptive/      # JavaScript reference solutions (descriptive)
├── tests-algorithm/            # LLM-generated tests (algorithmic)
├── tests-descriptive/          # LLM-generated tests (descriptive)
├── Passed_test_gpt/            # Tests by ChatGPT-4 that passed
├── Passed_test_claude/         # Tests by Claude 3.5 Sonnet that passed
├── Claude/                     # Claude-specific experiment materials
├── coverage*/                  # Jest/Istanbul coverage outputs
├── claude_coverage/            # Coverage outputs for Claude
├── mutation-reports/           # StrykerJS mutation reports
├── reports/mutation/           # Additional mutation reports
├── logs/, claude_logs/         # Execution logs (ChatGPT-4, Claude)
├── Selenium_testing/           # Phase 2: Selenium scripts and materials
├── scripts/                    # Helper scripts (e.g., run_problem_tests.js)
├── dataset.csv                 # Experimental dataset
├── generate_tests.js           # Calls LLM APIs to generate tests
├── generate_individual_coverage.js
├── claude_test.js
├── run_coverage.ps1, run_single_test.ps1
├── jest.config.mjs, babel.config.json
├── stryker*.config.json        # Per-model / per-prompt / per-category Stryker configs
└── package.json
```

> `stryker-tmp-*` directories are intermediate Stryker sandboxes retained from the original runs. They are not needed for reproduction.

## 5. Requirements

| Component | Version |
|---|---|
| OS (original experiments) | Windows 11 |
| Node.js | TODO (≥ 18 recommended; ES modules required) |
| Jest | ^30.0.4 |
| StrykerJS (`core`, `jest-runner`) | ^9.0.1 |
| Babel (`core`, `preset-env`) | ^7.28.0 |
| Selenium WebDriver | TODO |
| Google Chrome / ChromeDriver | TODO (must match) |
| LLM SDKs | `openai` ^5.10.1, `@anthropic-ai/sdk` ^0.59.0 |

API keys are **only** needed to regenerate tests or scripts from the LLMs. Re-running the evaluation on the provided artifacts needs no keys.

## 6. Installation

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

<!-- TODO: verify variable names against generate_tests.js -->

## 7. Reproducing the Experiments

### 7.1 Phase 1: Test generation and evaluation

**Run problem tests**

```bash
npm run test:problem
```

**Generate per-solution coverage reports**

```bash
npm run coverage:split
```

**Mutation testing, ChatGPT-4 (algorithmic, prompt1)**

```bash
npm run mutation:gpt:algo:prompt1
```

**Mutation testing, Claude 3.5 Sonnet**

```bash
npm run mutation:claude:algorithm:prompt1
npm run mutation:claude:algorithm:prompt2
npm run mutation:claude:algorithm:prompt3
npm run mutation:claude:descriptive:prompt1
npm run mutation:claude:descriptive:prompt2
npm run mutation:claude:descriptive:prompt3
```

Configurations for the remaining ChatGPT-4 runs are provided as `stryker-algorithm-prompt{2,3}.config.json` and `stryker-descriptive-prompt{1,2,3}.config.json`:

```bash
npx stryker run stryker-descriptive-prompt1.config.json
```

Outputs are written to `mutation-reports/` (HTML and JSON). See [`MUTATION_TESTING_README.md`](MUTATION_TESTING_README.md) for Stryker details and troubleshooting.

### 7.2 Phase 2: Selenium web automation

```bash
cd Selenium_testing
# TODO: add install and run commands, e.g.
# npm install selenium-webdriver
# node <script>.js
```

<!-- TODO: document the 5 websites, the folder layout of Selenium_testing/, how to toggle explicit synchronization, and where results are recorded. -->

### 7.3 Expected outputs and runtime

<!-- TODO: state approximate runtime for one full mutation run and where the final numbers in the paper's tables can be found (file/path per table). -->

## 8. Key Results

<!-- TODO: fill with the paper's headline numbers. A reviewer-friendly summary table is the single most useful addition. -->

| Metric | ChatGPT-4 | Claude 3.5 Sonnet |
|---|---|---|
| Pass rate | TODO | TODO |
| Statement coverage | TODO | TODO |
| Branch coverage | TODO | TODO |
| Function coverage | TODO | TODO |
| Mutation score | TODO | TODO |
| Selenium success (with sync) | TODO | TODO |
| Selenium success (without sync) | TODO | TODO |

See the paper for the full analysis.

## 9. Reproducibility Notes and Limitations

- **Model versions:** results correspond to ChatGPT-4 (TODO exact model ID) and Claude 3.5 Sonnet (TODO snapshot, e.g. `claude-3-5-sonnet-YYYYMMDD`) accessed via TODO (API / web UI) between TODO and TODO. Hosted models change over time, so regenerated outputs may differ. The shipped generated artifacts are the authoritative record.
- **Non-determinism:** LLM outputs are stochastic (temperature/settings: TODO).
- **Dependencies:** versions in `package.json` may differ from those used originally; `package-lock.json` pins the current resolution.
- **Platform:** `.ps1` helpers assume Windows PowerShell. On Linux/macOS, use the `npm run` scripts.
- **Web targets:** Phase 2 depends on live third-party websites, which may change or become unavailable.

## Citation

If you use this work, please cite:

```bibtex
@inproceedings{TODO_key,
  title     = {Evaluating Large Language Models for Automated Test Case Generation and Web Automation},
  author    = {TODO},
  booktitle = {TODO},
  year      = {TODO},
  doi       = {TODO}
}
```

## License

TODO: add a `LICENSE` file (e.g., MIT for code, CC BY 4.0 for data/prompts) and state it here.

## Contact

TODO: name, affiliation, email
