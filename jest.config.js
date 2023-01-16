module.exports = async () => {
    return {
        roots: [
            '<rootDir>/src/shared',
            '<rootDir>/src/widgets'
        ],
        collectCoverage: true,
        setupFiles: ['react-app-polyfill/jsdom'],
        testMatch: [
            '<rootDir>/src/{shared,widgets}/**/*.{spec,test}.{js,jsx,ts,tsx}',

            /** This commented code shows that all those tests can be found and executed by Jest */
            // '<rootDir>/src/widgets/**/*.{spec,test}.{js,jsx,ts,tsx}',
            // '<rootDir>/src/shared/**/*.{spec,test}.{js,jsx,ts,tsx}',
        ],
        testEnvironment: 'jsdom',
        moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
        resetMocks: true,
        watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    };
};
