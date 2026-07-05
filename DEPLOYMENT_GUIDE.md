# Deployment Guide — From Zero to Live Website

This guide assumes you have **never** installed developer tools before. Every
command is explained. Follow it top to bottom in order.

---

## 1. Required Software

You need four things installed on your computer before touching this
project:

1. **VS Code** — the code editor you'll work in
2. **Node.js** — lets your computer run JavaScript tools and build the site
3. **Git** — tracks changes to your code and talks to GitHub
4. **A GitHub account** — hosts your code online and can host the live site

We'll install each one now.

---

## 2. Installing VS Code

1. Go to https://code.visualstudio.com
2. Click the big **Download** button for your operating system (Windows, macOS, or Linux).
3. Run the installer you downloaded and click through with the default options.
4. Open VS Code once to confirm it launches.

---

## 3. Required VS Code Extensions

Open VS Code, click the **Extensions** icon in the left sidebar (looks like
four squares), search for and install each of these:

- **ESLint** (by Microsoft) — highlights code issues as you type
- **Prettier – Code formatter** — auto-formats your code
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** — handy React shortcuts

You don't need to configure these right now — just having them installed is
enough to get useful hints while you work.

---

## 4. Installing Node.js

Node.js lets you run the `npm` command, which installs and runs this
project.

1. Go to https://nodejs.org
2. Download the **LTS** version (the one labeled "Recommended for most
   users").
3. Run the installer with default options.
4. Verify it worked: open a terminal (in VS Code: **Terminal → New
   Terminal**) and type:
   ```bash
   node -v
   npm -v
   ```
   You should see two version numbers printed. If you see an error instead,
   restart your computer and try again — this is the most common fix.

---

## 5. Installing Git

Git tracks every change you make to your code so you can save (commit) and
upload (push) it to GitHub.

1. Go to https://git-scm.com/downloads
2. Download the version for your operating system and run the installer.
3. On Windows, keep all the default options during installation.
4. Verify it worked:
   ```bash
   git --version
   ```
   You should see something like `git version 2.44.0`.

Then tell Git who you are (only needs to be done once per computer):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 6. Creating a GitHub Account

1. Go to https://github.com
2. Click **Sign up** and follow the steps (email, password, username).
3. Verify your email address when GitHub sends you a confirmation link.

---

## 7. Creating a GitHub Repository

1. Once logged in, click the **+** icon top-right → **New repository**.
2. Name it something like `portfolio`.
3. Leave it **Public** (so it can later be hosted for free).
4. **Do not** check "Add a README" — this project already has one.
5. Click **Create repository**.
6. On the next page, copy the URL under "…or push an existing repository
   from the command line" — it looks like:
   ```
   https://github.com/yourusername/portfolio.git
   ```
   Keep this tab open, you'll need that URL soon.

---

## 8. Getting the Project onto Your Computer

If you downloaded this project as a folder from Claude, skip to step 9 and
open that folder directly. If instead you're starting from an empty
repository you just created, you would normally **clone** it — but since you
already have the full project folder, we'll go the other direction: turn
your existing folder into a Git repository and push it up (covered in
step 14).

**Cloning** (for reference, if you ever start from GitHub instead):

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

`git clone` downloads a repository from GitHub onto your computer. `cd`
("change directory") moves your terminal into that folder.

---

## 9. Opening the Project in VS Code

1. Open VS Code.
2. **File → Open Folder…**
3. Select the `portfolio` folder (the one containing `package.json`).
4. Open the integrated terminal: **Terminal → New Terminal**. Confirm you
   see files like `package.json`, `src/`, and `public/` listed in the left
   sidebar.

---

## 10. Installing Project Dependencies

In the VS Code terminal, run:

```bash
npm install
```

**What this does:** reads `package.json`, downloads every library the
project depends on (React, Tailwind, Framer Motion, etc.), and puts them in
a new `node_modules` folder. This can take one to a few minutes depending on
your internet connection. `node_modules` is intentionally excluded from Git
(see `.gitignore`) because it can always be regenerated with this command.

---

## 11. Running the Development Server

```bash
npm run dev
```

**What this does:** starts Vite's local development server with hot-reload
— any change you save in the code appears instantly in the browser without
a manual refresh.

You'll see a message like:

```
  VITE v5.x.x  ready in 300 ms
  ➜  Local:   http://localhost:5173/
```

Open that `http://localhost:5173/` link in your browser to see the site
running locally. Leave this terminal running while you work; press
`Ctrl + C` in the terminal when you want to stop it.

---

## 12. Building the Project for Production

When you're ready to deploy, create an optimized production build:

```bash
npm run build
```

**What this does:** type-checks the whole project, then bundles and
minifies everything into a `dist/` folder — the actual files a web server
will serve to visitors. You generally won't open `dist/` directly; hosting
platforms (covered below) run this command for you automatically.

To preview that exact production build locally before deploying:

```bash
npm run preview
```

---

## 13. Fixing Common Errors

| Error message                                   | Likely cause & fix                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `'npm' is not recognized...`                     | Node.js isn't installed correctly — reinstall from nodejs.org and restart your terminal |
| `EADDRINUSE` or "port already in use"            | Another process is using port 5173 — close other terminals running `npm run dev`, or restart your computer |
| Blank white page in browser                       | Open the browser console (F12) and read the error; usually a typo in a recently edited file |
| `Module not found`                                | Run `npm install` again — a dependency may not have installed correctly            |
| TypeScript errors during `npm run build`         | Read the file and line number in the error message; it's pointing at a real type mismatch to fix |
| Tailwind classes not applying                     | Make sure the dev server is still running — Tailwind rebuilds styles on save        |

---

## 14. Committing Your Changes

"Committing" means saving a snapshot of your code into Git's history.

From the `portfolio` folder in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: complete portfolio website"
```

- `git init` — turns this folder into a Git repository (only needed once).
- `git add .` — stages every file in the folder to be included in the next commit.
- `git commit -m "..."` — saves a snapshot with a short description.

---

## 15. Pushing to GitHub

Connect your local folder to the GitHub repository you created in step 7,
then upload your code:

```bash
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

- `git branch -M main` — names your primary branch `main`.
- `git remote add origin ...` — tells Git where "GitHub" is for this project (replace the URL with your own repository's URL from step 7).
- `git push -u origin main` — uploads your commits to GitHub.

Refresh your GitHub repository page in the browser — your files should now
appear there.

**Making future updates:** any time you change content later, repeat:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 16. Deploying with GitHub Pages

1. Install the GitHub Pages helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add a `homepage` field and two scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```
4. On GitHub, go to your repository → **Settings → Pages**, and confirm the
   source is set to the `gh-pages` branch.
5. Your site will be live at `https://yourusername.github.io/portfolio`
   within a minute or two.

> Note: because this project uses React Router, GitHub Pages needs the
> `homepage` field above so asset paths resolve correctly under the
> `/portfolio` subpath.

---

## 17. Deploying with Vercel (recommended)

Vercel is built by the creators of Next.js and handles Vite + React projects
with zero configuration.

1. Go to https://vercel.com and sign up using your GitHub account.
2. Click **Add New… → Project**.
3. Select your `portfolio` repository from the list (you may need to click
   "Configure GitHub App" and grant access first).
4. Vercel auto-detects Vite. Leave the default build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. In about a minute you'll get a live URL like
   `https://portfolio-yourusername.vercel.app`.
6. Every future `git push` to `main` automatically redeploys the site.

---

## 18. Deploying with Netlify

1. Go to https://netlify.com and sign up using your GitHub account.
2. Click **Add new site → Import an existing project**.
3. Choose GitHub, then select your `portfolio` repository.
4. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**. Netlify gives you a live URL immediately and
   redeploys automatically on every push.
6. For React Router to handle refreshes on sub-paths correctly, add a file
   at `public/_redirects` with this content:
   ```
   /*    /index.html   200
   ```

---

## 19. Connecting a Custom Domain Later

Once you own a domain (e.g. from Namecheap, GoDaddy, or Google Domains):

**On Vercel:** Project → Settings → Domains → add your domain → follow the
DNS instructions shown (usually adding an `A` or `CNAME` record at your
domain registrar).

**On Netlify:** Site settings → Domain management → Add a custom domain →
follow the same style of DNS instructions.

**On GitHub Pages:** Repository → Settings → Pages → enter your custom
domain under "Custom domain," then add the DNS records GitHub shows you.

DNS changes can take anywhere from a few minutes to 24 hours to fully
propagate.

---

## 20. Updating Your Portfolio in the Future

Whenever you want to change something:

1. Open the project folder in VS Code.
2. Run `npm run dev` to preview changes live.
3. Edit the relevant file in `src/data/` for content, or the relevant
   component in `src/components/` for layout/behavior.
4. Save, check the browser preview.
5. Commit and push:
   ```bash
   git add .
   git commit -m "Update: describe your change"
   git push
   ```
6. Vercel/Netlify redeploy automatically. For GitHub Pages, re-run
   `npm run deploy`.

---

You now have everything needed to go from an empty computer to a live,
professional portfolio — and to keep updating it for years to come.
