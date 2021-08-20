module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: './coverage',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/test/migrations'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'reports/jest',
            },
        ],
    ],
};