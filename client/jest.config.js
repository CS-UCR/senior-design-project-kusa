module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
    ],
    clearMocks: true,
    collectCoverageFrom: ["/src/**/**/**/*.{ts,tsx,js,jsx}"],
    coverageDirectory: "coverage",
    moduleFileExtensions: ["js", "ts", "tsx", "json", "jsx"],
    setupFiles: ["<rootDir>/enzyme.config.js"],
    testMatch: ["<rootDir>/src/**/**/**/*.test.ts(x)"],
    testPathIgnorePatterns: ["\\\\node_modules\\\\"],
    testURL: "http://localhost",
    transformIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/build/",
        "<rootDir>/dist/",
    ],
    verbose: false,
    setupFilesAfterEnv: ["<rootDir>/jest.config.js"],
    transform: {
        "^.+\\.[t|j]sx?$": "ts-jest",
        "^.+.(svg)$": "jest-transform-stub",
    },
    moduleNameMapper: {
        "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
        "^d3-(.*)$": `d3-$1/dist/d3-$1`,
    },
};
