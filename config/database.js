module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env(
          "DATABASE_HOST", "127.0.0.1"
        ),
        port: env("DATABASE_PORT", 3307),
        database: env("DATABASE_NAME", 'final_project'),
        username: env("DATABASE_USERNAME", 'root'),
        password: env("DATABASE_PASSWORD", 'twrrose'),
        migrations: {
          tableName: "migrations",
        },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
