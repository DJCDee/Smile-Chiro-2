# Running the App Locally

## Dependencies

- [Visual Studio Code](https://code.visualstudio.com/Download)
- [NodeJS](https://nodejs.org/en/download/package-manager), (<= v20)

Once you have those installed, you should also install two extensions for Visual Studio Code:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

These extensions are essential for highlighting potential issues in your code before you build/run. We have a fairly strict ruleset that prevents common sources of errors in React (and Typescript) applications.

## Project Structure

We are generally following the same structure as [Bulletproof React](https://github.com/alan2207/bulletproof-react). This means we also have much of the same application dependencies and development dependencies. Some differences will always arise, but in terms of where code lives it serves as a good baseline.

The general approach is to split the application by feature, but sharing a common set of components for consistency.

## Running

To run, enter following command in your terminal of choice:

```shell
npm run dev
```

## Testing

To run the unit test suite:

```shell
npm run test
```

## Storybook

We also have [Storybook](https://storybook.js.org) set up, which provides a convenient way in which to test the visual appearance and behaviour of components outside of the context of an application.

To run storybook:

```shell
npm run storybook
```
