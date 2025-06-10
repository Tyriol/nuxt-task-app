# Nuxt Task App ✅

A simple task app built using Nuxt, using a SQLite db provided by Turso

## How to run 💾

Clone or download the repo

```
https://github.com/Tyriol/nuxt-task-app.git
```

---

You will need to create a Turso database, which you can do here [Turso Quick Start](https://docs.turso.tech/quickstart)

Then create a `.env` file to add the following environment variables:

```
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

You can of course use whatever other db you'd like.

---

Navigate to the project folder

```
cd nuxt-task-app
```

---

Install dependencies and run the app

```
npm i
npm run dev
```

## Features ✨

- Ability to add tasks and view them on their own page.
- Clean styles from Pico Css and some custom styles

## Tech used 🤖

- [Vue.js](https://vuejs.org/)
- [Nuxt](https://nuxt.com/)
- [Turso]() <br>
  A database service that provides SQLite databases
- [Drizzle](https://orm.drizzle.team/)<br>
  ORM: A TypeScript-first database toolkit that lets you write database queries using JavaScript/TypeScript code instead of raw SQL.<br>
  Kit: The cli companion to Drizzle ORM that handles database migrations, schema changes, and generates the code needed to keep your database structure in sync with your application.
  Drizzle-Zod: A bridge library that automatically generates Zod validation schemas from your Drizzle database schemas.
- [Zod](https://zod.dev/)<br>
  A TypeScript library for validating and parsing data
- [Pico CSS](https://picocss.com/)

## Why I built this ❓

Continueing my journey to learn another library and framework other than React and Next, to see if I would like to invest more time down this path, but also to be better able to adapt to other languages and frameworks rather than being stuck in the React/JS mindset.

## Future features 💡

- Ability to update a task.
- Ability to mark a task as done.
- Ability to delete a task.
- ? Filtering maybe
