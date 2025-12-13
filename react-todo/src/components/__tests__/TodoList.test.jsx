import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import TodoList from "../TodoList.jsx";

describe("TodoList Component", () => {
  it("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  it("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  it("can toggle a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Click to mark as completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to mark as not completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  it("can delete a todo", () => {
    render(<TodoList />);

    // Target specific todo
    const todoText = "Build a Todo App";
    const todoItem = screen.getByText(todoText);
    
    // Find delete button inside the same list item
    const deleteButton = todoItem.closest("li").querySelector("button");

    fireEvent.click(deleteButton);
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
