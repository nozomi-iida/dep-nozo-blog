<div align="center">
  <h1 align="center">Nozo-blog</h1>
  <h3>This is a blog app about working holiday in Australia.</h3>
</div>

<div align="center">
  <a href="https://nozo-blog-one.vercel.app/">nozo-blog</a>
</div>

<br />

I made this app to learn app router with Next.js.

<!-- ## Demo

![Nozo-blog Welcome GIF](.github/images/papermark-welcome.gif) -->

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Typescript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – styling
- [Vercel](https://vercel.com/) – hosting
- [contentful](https://www.contentful.com/) – cms

## Getting Started

### Prerequisites

Here's what you need to be able to run nozo-blog:

- Node.js (version >= 18)
- [contentful](https://www.contentful.com/) (for content management)

### 1. Clone the repository

```shell
git clone https://github.com/nozomi-iida/nozo-blog
cd nozo-blog
```

### 2. Install pnpm dependencies

```shell
pnpm install
```

### 3. Copy the environment variables to `.env`

```shell
cp .env.example .env
```

### 4. Configure the variables in `.env`

| Variable                    | Value                           |
| --------------------------- | ------------------------------- |
| CONTENTFUL_SPACE_ID         | < contentful space id >         |
| CONTENTFUL_ACCESS_TOKEN     | < contentful access token >     |
| CONTENTFUL_MANAGEMENT_TOKEN | < contentful management token > |

### 5. Run the dev server

```shell
pnpm dev
```

### 6. Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.
