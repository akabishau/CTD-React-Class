## Description

This project is the final assignment for my React class with [Code the Dream](https://codethedream.org/about/), a non-profit organization that provides tech education to people from diverse backgrounds.

The goal of this project is to apply the concepts and skills learned throughout the [React course curriculum](https://learn.codethedream.org/flamingo-react/). Throughout the development process, I've incorporated a range of React concepts and technologies, including state management, component-based architecture, and the use of hooks for handling lifecycle events and managing state.

The application is a simple Task Manager app that interacts with an Airtable database. It was bootstrapped with Vite and uses Styled Components for styling. The purpose of this project is to demonstrate my understanding of React and related technologies, as well as my ability to build a functional application from scratch.

## Installation

To get started, clone the repository to your local machine, and run `npm install` to install dependencies and `npm run dev` to start the project.

This application uses Airtable as a remote database. To run the application locally, you'll need to create an account with Airtable and obtain your API token, Base ID, and Table Name. Once you have these, create a .env file in the root of the project and add the following lines:
```
VITE_AIRTABLE_API_TOKEN=your_airtable_api_token
VITE_AIRTABLE_BASE_ID=your_airtable_base_id
VITE_TABLE_NAME=your_table_name
```

## Technologies Used

The project leverages a variety of technologies and tools across different aspects of development:

| Category         | Technology | Description |
|------------------|------------|-------------|
| FE Framework     | [React](https://reactjs.org/) | A JavaScript library for building user interfaces. |
| Build Tool       | [Vite](https://vitejs.dev/) | A modern, fast build tool for JavaScript and CSS. |
| Styling          | [Styled Components](https://styled-components.com/) | Utilizes tagged template literals for styling React components. |
| Database         | [Airtable](https://airtable.com/) | A cloud-based platform that combines the simplicity of a spreadsheet with the complexity of a database. |
| Testing          | [Vitest](https://vitest.dev/) + [MSW](https://mswjs.io/) | Uses Vitest for unit and integration testing, with Mock Service Worker for mocking API calls. |
| Code Quality     | [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | ESLint helps with code analysis and adherence to coding standards, while Prettier ensures code formatting consistency. |

