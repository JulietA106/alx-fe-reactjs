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
    fireEvent.change(screen.getByPlaceholderText("Enter new todo"), {
      target: { value: "Test new todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  it("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  it("can delete a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[1]);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
