import { render, screen } from "@testing-library/react";
import About from "../about";

describe("About", () => {
  test("renders headline", () => {
    render(<About />);

    screen.debug();
    expect(
      screen.getByRole("heading", { name: "Hello about!" })
    ).toBeInTheDocument();

    // check if App components renders headline
  });
});
