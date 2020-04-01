# Github Repository Explorer
The following are things I would add with additional time or have excluded for the sake of cleaner code:
- Links to commits in github
- A drop down to sort the repositories
- Height animation when the list item expands to show commits
- User login to show hidden repos or the repos by user rather than organization
- Responsive styles to render the list on mobile better
- More tests especially for RepoList and RepoListItem components

## Notes:
- I've tried to keep the components smaller but the app and repolistitem files could probably have their fetch functions refactored into a service.
- If you find you are getting no results you may be hitting the github rate limit (90 an hour for unauthorized users)
- The full commands are listed below in more detail from the create-react-app generator. You can run `npm install` and `npm start` then go to http://localhost:3000.
- To run tests run `npm test`.
- In addition to the default create-react-app libraries I'm also using @primer/octicons-react and dayjs for icons and date formatting respectively.

## Manual Tests:
### OrgSearch
- If text is entered into input -> a network request is made

### RepoList
- If org doesn't return a valid response -> the text 'No repositories for this organization' shows as a list item
- If org search has no text -> no list is rendered
- If org search returns a list -> a list item is rendered per repository

### RepoListItem
- The following are rendered: repo name, open issue count, watchers, stargazers count, time from now a push was made
- If the repo item is clicked -> if no commit list exists in the repo state -> show loading, make request for commits
- If the repo item is clicked -> if commit list exits in the repo state -> no loading is shown, no request is made for commits
- If the repo item is clicked -> when request is returned the commits are rendered

### CommitItem
- The following are rendered: commit message, commit authors name, time from now commit was made


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
