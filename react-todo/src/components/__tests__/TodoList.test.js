import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
