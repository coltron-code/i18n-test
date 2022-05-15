# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

## Notes

I explored [Docusaurus](https://docusaurus.io/docs/i18n/tutorial) which is React-based and allows for i18n localization.

**My test Repo:** https://github.com/coltron-code/i18n-test
**Working Crowdin integration:** https://crwd.in/i18n-learndocs

I can migrate all the markdown, but would like to find someone who can quickly fork the manager redesign and build components to make this UI seemless. 

This will push mass translation to the right, but it may mean less work/rework in the future.

I didn't translate the sidebar or navigation, but proof on concept that this stack works:
![](https://i.imgur.com/fOOvgLk.png)


This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
