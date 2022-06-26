# Nuxt3 + TailwindCSS + MongoDB Example

Deploy your Nuxt3 + TailwindCSS + MongoDB project to Vercel with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tanquar/nuxt-tailwind-mongo-starter)

_Live Example: https://nuxt-tailwind-mongo-starter.vercel.app/_

## Prerequisites

Install `n` and `yarn`.

```bash
brew install n
brew install yarn
```

## Setup

Install the dependencies:

```bash
yarn install
```

## Setup MongoDB

Visit [MongoDB Atlas](https://www.mongodb.com/) and create an Atlas database.
Free tier should suffice.

Define connection user, such as `staff`.
Define connection password.

Environment variables in vercel:

```
(All)
MONGODB_URL=mongodb+srv://<user>:<password>@cluster....mongodb.net/?retryWrites=true&w=majority

(Production)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-prod

(Preview)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-prev

(Development)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-dev
```

where `<user>` is the connection user, `<password>` is the connection password.

Environment variables in local `.env`:

```env
MONGODB_URL=mongodb+srv://<user>:<password>@cluster....mongodb.net/?retryWrites=true&w=majority
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-dev
```

## Allow IP in MongoDB Atlas

If Versel generates an error `Task timed out after 10.01 seconds`,
the Mongo DB Atlas is blocking an IP address of the Versel Server Function.
Allow `0.0.0.0` by visiting MongoDB Atlas > Security > Network Access > Add IP Address.

## Development

Start the development server on http://localhost:3000:

```bash
yarn dev
```

## Deploy Your Own

Build the application for production:

```bash
yarn build
```
