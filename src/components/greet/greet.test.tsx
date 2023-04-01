/**
 * Greet component should render 'hello'
 * If a name is passed into Greet component, it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders hello", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders hello with name", () => {
  render(<Greet name="jason" />);
  const textElement = screen.getByText(/hello jason/i);
  expect(textElement).toBeInTheDocument();
});
