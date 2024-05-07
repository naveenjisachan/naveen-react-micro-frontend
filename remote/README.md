# React Microfrontend Todo List

This project is a standalone React Microfrontend (MFE) component that encapsulates a fully functional todo list application. It allows users to create todo tasks, mark them as completed or incomplete, and filter the todo list based on their status.

## Features

- **Todo Creation:** Users can input a new todo task description, and tasks are added to a list.
- **Todo Status:** Tasks have a checkbox to mark them as completed or incomplete, with visually distinguished completed items (e.g., strikethrough).
- **Todo Persistence:** Todo items are saved using the browser’s localStorage to persist across page refreshes and sessions.
- **Filtering:** Provides buttons to filter the list based on "All", "Active", or "Completed" todos.

## Technical Details

- **Language:** TypeScript
- **Testing:** Unit tests with Jest and React Testing Library
- **Styling:** CSS for basic styling
- **State Management:** React’s built-in state management
- **Dependencies:** @testing-library/react, @testing-library/jest-dom

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
cd remote
npm install
npm start
```
2. run test cases:
```bash
npm test