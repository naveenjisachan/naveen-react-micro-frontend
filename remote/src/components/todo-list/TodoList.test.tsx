import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
    test('renders todo list correctly', () => {
        const { getByPlaceholderText, getByText } = render(<TodoList />);
        const inputElement = getByPlaceholderText('Add a new todo...');
        const addButtonElement = getByText('Add Todo');
        expect(inputElement).toBeTruthy();
        expect(addButtonElement).toBeTruthy();
    });

    test('adds a new todo', () => {
        const { getByPlaceholderText, getByText, getByLabelText } = render(<TodoList />);
        const inputElement = getByPlaceholderText('Add a new todo...');
        const addButtonElement = getByText('Add Todo');
        const todoText = 'Test Todo';
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.click(addButtonElement);
        const todoItemElement = getByText(todoText);
        expect(todoItemElement).toBeTruthy();
    });

    test('toggles todo status', () => {
        const { getByPlaceholderText, getByText } = render(<TodoList />);
        const inputElement = getByPlaceholderText('Add a new todo...');
        const addButtonElement = getByText('Add Todo');
        const todoText = 'Test Todo';
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.click(addButtonElement);
        const todoCheckboxElement = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
        expect(todoCheckboxElement.checked).toBe(false);
        fireEvent.click(todoCheckboxElement);
        expect(todoCheckboxElement.checked).toBe(true);
    });

    test('filters todos correctly', () => {
        const { getByPlaceholderText, getByText, queryAllByText, debug } = render(<TodoList />);
        const inputElement = getByPlaceholderText('Add a new todo...');
        const addButtonElement = getByText('Add Todo');
        const activeButtonElement = getByText('Active');
        const completedButtonElement = getByText('Completed');
        const todoText = 'Test Todo';
        fireEvent.change(inputElement, { target: { value: todoText } });
        fireEvent.click(addButtonElement);
        const todoCheckboxElement = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
        fireEvent.click(todoCheckboxElement);
        fireEvent.click(completedButtonElement);
        const completedTodos = queryAllByText(todoText);
        console.log("Completed Todos:", completedTodos);
        expect(completedTodos.length).toBe(0);
        fireEvent.click(activeButtonElement);
        const activeTodos = queryAllByText(todoText);
        console.log("Active Todos:", activeTodos);
        expect(activeTodos.length).toBe(3);
    });
});
