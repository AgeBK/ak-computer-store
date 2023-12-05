import { render, screen, act } from "@testing-library/react";
import { mockFetch } from "../../mocks/mockData";
import { ComputerProvider } from "../../context";
import Price from ".";

describe("Price", () => {
  it("renders Price component and related items", async () => {
    global.fetch = mockFetch;
    render(
      <ComputerProvider>
        <Price price={987.65} loc="testLocation" sale={9.87} />
      </ComputerProvider>
    );

    expect(
      await act(() =>
        screen.findByText((_, element) => element.textContent === "$987.65")
      )
    ).toBeInTheDocument();
    expect(
      await act(() =>
        screen.findByText((_, element) => element.textContent === "9.87% OFF")
      )
    ).toBeInTheDocument();
    global.fetch.mockClear();
    delete global.fetch;
  });
});
