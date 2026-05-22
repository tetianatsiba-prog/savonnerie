import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests-e2e',
    fullyParallel: true,
    reporter: 'list',
    use: {
        baseURL: 'http://localhost:8080',
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: 'python3 -m http.server 8080',
        url: 'http://localhost:8080/index.html',
        reuseExistingServer: true,
    },
});