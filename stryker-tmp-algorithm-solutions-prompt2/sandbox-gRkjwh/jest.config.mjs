export default {
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    
    // Transform ES modules
    transform: {
        '^.+\\.js$': 'babel-jest',
    },

    testMatch: [
        "<rootDir>/Passed_test_gpt/tests-algorithm/tests-prompt2/*.test.js"
    ],

    // Explicitly exclude problematic folders
    testPathIgnorePatterns: [
        "Claude/",
        "solutions-descriptive/",
        "tests-descriptive/",
        "coverage/",
        "node_modules/"
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