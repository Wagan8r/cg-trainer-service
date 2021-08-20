module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: './coverage',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testMatch: ['**/test/migrations/*.ts'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'reports/jest'
            }
        ]
    ]
};