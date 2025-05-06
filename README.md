# Example of Deno deploy + Prisma Postgres + `prisma-client`

inspired this tutorial, more Deno way.

<https://www.prisma.io/docs/orm/prisma-client/deployment/edge/deploy-to-deno-deploy>

## Notice

This project use **Early Access or Preview Features**.

<https://www.prisma.io/docs/orm/prisma-schema/overview/generators#prisma-client-early-access>

## Setup

This project require `.env` for development.

1. Access to Prisma Postgres. <https://www.prisma.io/postgres>
2. create project and environment.
3. `Database` -> `Setup` -> `Generate database credentials`
4. create `.env` and copy this value from console.

## CLI

```shell
deno task generate # generate Prisma Client
deno task dev # run server at http://localhost:8000/
deno task studio # open Prisma Studio
```

### Deploy

Deno Deploy

<https://deno.com/deploy>

1. create project.
2. Select repository, and check `Just link the repo, I’ll set up GitHub Actions myself`.
3. `Settings` -> `Environment Variables` -> `+ Add Variable`
4. key is `DATABASE_URL`, value, from `.env`, is like `prisma+postgres://accelerate...`
5. deploy

## License

MIT
