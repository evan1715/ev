# ev

My primary working repo. A catch-all for whatever I'm building, tinkering with, or learning. Personal projects, portfolio work, things made for fun, shared packages, home lab configs and scripts, Docker setups, research, learning notes, and general messing around all live here under a single workspace so I can operate out of one tree instead of juggling repos.

Projects that used to live in their own repos are archived upstream and superseded by the copies here.

## Layout

```
ev/
├── packages/
│   ├── passage/                    shared utils (logging, fetch, misc)
│   └── react-redux-loading-bar/    updated fork of the archived upstream package
└── projects/
    ├── chat-app/
    ├── my-website/
    ├── recipe-project/
    └── weather-app/
```

## Projects

| Path | Description | See former |
| --- | --- | --- |
| [projects/weather-app/](projects/weather-app/) | Express + hbs weather lookup app | [WeatherApp](https://github.com/evan1715/WeatherApp) (archived) |
| [projects/chat-app/](projects/chat-app/) | Real-time chat (Express + socket.io) | [ChatApp](https://github.com/evan1715/ChatApp) (archived) |
| [projects/my-website/](projects/my-website/) | Next.js personal site; also hosts the rewritten Indecision app at [src/pages/indecision.js](projects/my-website/src/pages/indecision.js) | [MyWebsite](https://github.com/evan1715/MyWebsite) (archived) · [IndecisionApp](https://github.com/evan1715/IndecisionApp) (archived, merged into my-website) |
| [projects/recipe-project/](projects/recipe-project/) | React + Redux Toolkit + Mongo recipe app | [RecipeProject](https://github.com/evan1715/RecipeProject) (archived) |

## Packages

| Path | Description | See former |
| --- | --- | --- |
| [packages/passage/](packages/passage/) | Reusable utility package (chalk logging, fetch-retry, morgan) | [passage](https://github.com/evan1715/passage) (archived) |
| [packages/react-redux-loading-bar/](packages/react-redux-loading-bar/) | My maintained fork of the archived upstream `react-redux-loading-bar`, modernized and simplified; kept in-tree so dependent projects aren't blocked by the upstream freeze. Previously standalone at [evan1715/react-redux-loading-bar](https://github.com/evan1715/react-redux-loading-bar) | --- |

## Other content

Beyond the JS/TS workspaces above, this repo also collects (or will collect) non-workspace material kept outside the npm tree:

- Home lab configs, Docker compose files, and infra scripts
- Shell/automation scripts and one-off tools
- Research notes and learning material

These live in their own top-level folders and are intentionally not part of the npm workspace graph.

## Stack

- Node `>=24`, ESM throughout (`"type": "module"`)
- TypeScript 6 with composite project references; root [tsconfig.json](tsconfig.json) extended by each workspace
- npm workspaces (see root [package.json](package.json))
- Prettier + ESLint 9 (flat config)

## Scripts

Workspace scripts are proxied from the root [package.json](package.json):

```
npm run build:passage
npm run dev:chat-app       npm run start:chat-app
npm run dev:weather-app    npm run start:weather-app
```

Per-project scripts (dev/build/start) can also be run from inside each workspace.

## License

AGPL-3.0 with Commons Clause - see individual workspaces for authorship.
