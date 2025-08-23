// @ts-nocheck
export default {
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    
    // Transform ES modules
    transform: {
        '^.+\\.js$': 'babel-jest',
    },

    testMatch: [
        "<rootDir>/Passed_test_gpt/tests-algorithm/tests-prompt1/*.test.js"
    ],

    // Only exclude Claude folder, keep Passed_test_gpt
    testPathIgnorePatterns: [
        "Claude/"
    ],
    
    // Setup files if needed
    setupFilesAfterEnv: [],
    
    // Test timeout
    testTimeout: 10000,
    
    // Root directory
    rootDir: ".",
    
    // Module resolution
    moduleFileExtensions: ["js", "json"],
    
    // Clear mocks between tests
    clearMocks: true
};