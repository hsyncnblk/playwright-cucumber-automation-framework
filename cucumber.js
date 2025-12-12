module.exports = {
  default: {
    tags: "",
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: [
      "src/features/**/*.feature"
    ],
    publishQuiet: true,
    dryRun: false,
    require: [
      "src/steps/**/*.ts",
      "src/support/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json"
    ]
  }
};