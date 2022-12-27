import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button/>", () => {
  it("should render the button", () => {
    render(<Button text="" onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render the button with a link", () => {
    render(<Button text="" onClick={() => {}} href="/" />);
    const button = screen.getByRole("button");
    const link = screen.getByRole("link");
    expect(button).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("should render the button without a link", () => {
    render(<Button text="" onClick={() => {}} />);
    const button = screen.getByRole("button");
    const link = screen.queryByRole("link");
    expect(button).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
  });
});
