module.exports = {
  apps: [
    {
      name: "admin_tool",
      script: "app.js",
      cwd: process.cwd(),
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
