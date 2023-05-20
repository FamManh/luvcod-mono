# Luvcod monorepo

This repository is setup in a monorepo structure and introduces some new build tools. Notable [pnpm](https://pnpm.io/) as the package manager and [Turborepo](https://turborepo.org/) as a build tool. The repository splits the structure into the following:

- **apps** - This is where end user web applications live
- **packages** - This is where anything reusable lives such as component libraries, utility libraries

> Getting Started: You'll need to ensure you install the key tools that we're using before you can use this repository. Here are links to the installation guides:
> pnpm - https://pnpm.io/installation
> Turborepo - https://turborepo.org/docs/getting-started#install-turbo

# Working within this Repository

We'll detail some of the things you may need to know here when developing against this repository.

## Running this project

Running the repository is fairly straight forward, although we're going to use `pnpm` instead of npm or yarn. Therefore once you have cloned the repository, navigate to the root project directory and run:

```
# install packages
pnpm install

# intall husky
pnpm prepare

# run web app in development mode
pnpm web:dev

# run admin app in development mode
pnpm admin:dev
```

This will install the dependencies, and start the web applications, automatically triggering any dependent builds in the process.

## Useful Scripts

There are a number of useful scripts provided at the root of the project. The aim is that you should rarely need to navigate to a sub-package to run a particular script. There is also a naming convention to make this easier to remember:

- `test`, `build`, `lint`, `cypress` (Run against all packages)
- `testp`, `buildp`, `lintp`, `cypressp`, `storybookp` (Run against a single package - **p** suffix)
- `testw`, `buildw`, `dev`, `cypressw`, `storybookw` (Run against a single in watch-mode - **w** suffix)

Other useful scripts:

- `clean` - Remove node_modules, build output and Turborepo caches
- `refresh` - Same as clean, except automatically install all dependencies again afterwards
- `graph` - Generate a dependency graph for the build command and display in a browser

If you need to manually run a script against a single package you can still do this using `pnpm` by doing:

```
turbo run <script-name> --filter=<package|app>
```

## Installing a package as a dependancy

To add a package as a dependency within `pnpm`. Simply run `pnpm add @iw/title` for example to add the title package.

```
cd apps/MyApp
pnpm add MyLibrary
```

## Adding a Package

Adding a new package varies slightly depending on the type of package that you want to add.

### Adding a React Application

Adding a react component library can be done using `create vite` although this needs to be done slightly differently due to the fact we're using both `pnpm` and a monorepo.

> Use the script featured below, replacing `<MyLibrary>` with the name of your component library

```
cd apps
pnpm create vite <MyApp --template react-ts
cd ..
pnpm install
```

Once you've done this you should then additional configure the following to work correctly in the monorepo:

- [TypeScript Config]()
- [ESLint Config]()
- [Package Scripts]()

### Adding a React Component Library

See more: [Create vite lib](https://vitejs.dev/guide/build.html#library-mode)
