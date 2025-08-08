export default {
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",

    testMatch: [
        "**/tests-descriptive/tests-prompt1/*.test.js",
        "**/tests-descriptive/tests-prompt2/*.test.js",
        "**/tests-descriptive/tests-prompt3/*.test.js",
        "**/tests-algorithm/tests-prompt1/*.test.js",
        "**/tests-algorithm/tests-prompt2/*.test.js",
        "**/tests-algorithm/tests-prompt3/*.test.js"
    ],


};