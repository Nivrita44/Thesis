# Mutation Testing Setup for Algorithm Solutions

This project is configured to run mutation testing using Stryker on your algorithm solutions.

## What is Mutation Testing?

Mutation testing is a technique to evaluate the quality of your test suite by introducing small changes (mutations) to your source code and checking if your tests can detect these changes. If tests fail when mutations are introduced, it means your tests are effective at catching bugs.

## Setup

The project is already configured with:
- **Stryker**: Mutation testing framework
- **Jest**: Test runner
- **Babel**: ES module support
- **Proper configurations** for your project structure

## Running Mutation Testing

### Option 1: Run all algorithm solutions
```bash
npm run mutation:algorithm
```

### Option 2: Use the helper script
```bash
npm run mutation:run
```

### Option 3: Run the original prompt1 configuration
```bash
npm run mutation:gpt:algo:prompt1
```

## What Gets Tested

- **Source files**: All files in `solutions-algorithm/` directory
- **Test files**: All test files in `Passed_test_gpt/tests-algorithm/tests-prompt1/`
- **Mutations**: JavaScript code mutations (arithmetic operators, logical operators, etc.)

## Output

Mutation testing results will be stored in:
- **Console output**: Real-time progress and summary
- **HTML report**: `mutation-reports/algorithm-solutions/` (detailed visual report)
- **JSON report**: For programmatic analysis

## Understanding Results

- **Mutation Score**: Percentage of mutations that were killed (detected by tests)
- **Surviving Mutations**: Mutations that weren't detected (potential test gaps)
- **Killed Mutations**: Mutations that were properly detected (good test coverage)

## Configuration Files

- `stryker-algorithm.config.json`: Main mutation testing configuration
- `jest.config.mjs`: Jest configuration for ES modules
- `babel.config.json`: Babel configuration for transpilation

## Troubleshooting

### Common Issues:

1. **ES Module errors**: Ensure you're using Node.js with ES module support
2. **Test failures**: Make sure all tests pass before running mutation testing
3. **Timeout issues**: Increase `timeoutMS` in Stryker config if needed

### Performance Tips:

- Use `maxConcurrentTestRunners: 2` for better performance on your system
- Run mutation testing during off-peak hours as it can be resource-intensive

## Example Output Structure

```
Mutation testing completed successfully!
📊 Check the mutation report in: mutation-reports/algorithm-solutions/

All tests (50) passed (0 failed)
Ran 0.00 tests per second over 0.00 seconds
Mutation testing completed in 0.00 seconds
```

## Next Steps

1. Run `npm run mutation:algorithm` to start mutation testing
2. Review the HTML report in the output directory
3. Improve tests based on surviving mutations
4. Re-run to verify improved test quality



