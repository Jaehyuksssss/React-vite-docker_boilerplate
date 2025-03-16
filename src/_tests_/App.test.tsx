import { render, screen } from "@testing-library/react";
import App from "../App";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<App />);
  const headingElement = screen.getByText(/Docker 띄우기/i);
  expect(headingElement).toBeInTheDocument();
});
