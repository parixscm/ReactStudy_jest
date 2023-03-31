import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet component is rendered successfully", () => {
  render(<Greet />);
  const textElement = screen.getByText(/jeststudy/i);
  expect(textElement).toBeInTheDocument();
});
