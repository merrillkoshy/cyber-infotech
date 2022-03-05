const nextJest = require("next/jest")

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest("./src")

// Any custom config you want to pass to Jest
const customJestConfig = {
	testEnvironment: "node",
	roots: ["<rootDir>"],
	preset: "ts-jest",
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	transform: {
		"^.+\\.tsx?$": ["babel-jest", "ts-jest", { presets: ["next/babel"] }],
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	snapshotSerializers: ["enzyme-to-json/serializer"],

	// https://github.com/zeit/next.js/issues/8663#issue-490553899
	globals: {
		// we must specify a custom tsconfig for tests because we need the typescript transform
		// to transform jsx into js rather than leaving it jsx such as the next build requires. you
		// can see this setting in tsconfig.jest.json -> "jsx": "react"
		"ts-jest": {
			tsConfig: "<rootDir>/tsconfig.jest.json",
		},
	},
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
