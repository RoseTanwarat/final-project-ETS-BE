module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env(
          "DATABASE_HOST"
        ),
        port: env("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        migrations: {
          tableName: "migrations",
        },
      },
      options: {
        debug: env("DATABASE_DEBUG", false),
        useNullAsDefault: true,
      },
    },
  },
});
