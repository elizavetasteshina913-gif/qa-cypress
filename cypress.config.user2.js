import { defineConfig } from "cypress";

export default defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: true
    },
    e2e: {
        specPattern: "cypress/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}",
        baseUrl: "https://qauto2.forstudy.space/",
        env: {
            userEmail: "aqamandarinkaa094@gmail.com",
            userPassword: "Valid1Pass",
        },
    },
});