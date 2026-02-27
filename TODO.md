Follow the steps below to finish setting up your application.

## Sqlite

Ensure that `DATABASE_URL` is configured as desired in `.env` file, then create the database:

```bash
bun sqlite:migrate # creates sqlite tables
```

