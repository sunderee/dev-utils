# Dev Utils

A collection of tools and utilities for developers.

## Usage

This is a Next.js application. You can run in on bare metal, or inside a Docker container.

### Option 1: bare metal

```bash
# Install dependencies
bun install

# Run in development mode
bun run dev

# Build and run production
bun run build && bun run start
```

### Option 2: inside Docker container

```bash
docker build --tag=dev-utils .
docker run --name=dev-utils --publish=3000:3000 dev-utils
```

## Contribution

This project is under active development. I add tools as I need them. If you'd like to see something added, please raise an issue. All contributions, suggestions, feedback, and grievances are welcome.

## License

Project is open sourced under GNU GPLv3 license. Read [LICENSE](./LICENSE) file for more information.