import { render, screen } from "@testing-library/react";
import PayOptions from ".";

describe("PayOptions", () => {
  it("renders PayOptions component and related items", async () => {
    render(<PayOptions price={999.99} />);
    expect(
      screen.getByText(
        (_, element) =>
          element.tagName === "LI" &&
          element.textContent === "4 payments of $250.00"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        (_, element) =>
          element.tagName === "LI" &&
          element.textContent === "From $10.00 per week"
      )
    ).toBeInTheDocument();
  });
});
