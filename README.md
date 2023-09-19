# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

🧪 Assignment - Testing API calls in React with the Star Wars API 🧪

📝 The Brief:
Make a GET request to the Star Wars "people" end point and for your App component to display the title of the first person that comes back from the API end point (name: 'Luke Skywalker').

Star Wars API docs: https://swapi.dev/

👉 Create a React app
👉 Make the React app call the Star Wars API people end point and display the first person on the page.
👉 Next, add msw so you can mock (or "stub") the API response.
👉 Use your mock server to write a test to check the first person that your mock server returns is being correctly rendered to the page.

🔥 Extension:
👉 Write a test that checks your component displays an error message saying "Oops... something went wrong, try again 🤕" if the API returns Status Code 500 (Internal Server Error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 ).
👉 Write another test checking your component displays an error message saying "418 I'm a tea pot 🫖, silly" in the scenario the API returns Status Code 418 (I’m a tea pot: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 )

💡Top Tips💡
This exercise is not about what your app looks like so don’t worry about styling! If you have time to add styling later - then great! But make sure you get through the extensions first 🫖
You will need to create a React app from scratch and strip out excess boiler plate.
npx create-react-app myAppName --template typescript
You will need to make an API call (Hint: recall how to use and the hook for this)
You will need to consider waiting for your data to load in both your app and your tests
(Hint: and and the jest-dom queries that start with findBy )
Remember to commit little and often to GitHub, and to keep your commit messages nice and descriptive
Don’t forget to add a README explaining how to run your app when it’s done! 🔥
Have a read of the React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/example-intro#full-exampleand Mock Service Worker Library: https://mswjs.io/

✨How to make a submission✨
✅ Please submit a GitHub link to your solution, ensuring you have a clear README file.
