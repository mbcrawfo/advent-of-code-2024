import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        clearMocks: true,
        restoreMocks: true,
        coverage: {
            provider: "v8",
            exclude: [
                "**/coverage/**",
                "**/dist/**",
                "**/mocks/**",
                "**/__mocks__/**",
                "**/eslint.config.*",
                "**/*.d.ts",
            ],
        },
    },
});
