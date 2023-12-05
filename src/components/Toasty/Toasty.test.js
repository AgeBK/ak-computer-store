import {
  render,
  screen,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockFetch } from "../../mocks/mockData";
import { ComputerProvider } from "../../context";
import Toasty from ".";
import AddToCart from "../AddToCart";

describe("Toasty", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it("renders Toasty component when item is added to cart", async () => {
    global.fetch = mockFetch;
    render(
      <ComputerProvider>
        <AddToCart productId={1} productName="testProduct" price={1.99} />
        <Toasty />
      </ComputerProvider>
    );

    // Add test product to cart
    const addToCartBtn = await act(() => screen.findByRole("button"));
    act(() => userEvent.click(addToCartBtn));
    // check toasty details
    const product = await screen.findByText(/testProduct/i);
    const added = await screen.findByText(/added to cart/i);
    const tickImg = await act(() => screen.findByRole("img"));
    expect(product).toBeInTheDocument();
    expect(added).toBeInTheDocument();
    expect(tickImg).toHaveAttribute("src", "/src/img/tick.png");

    // act(() => jest.advanceTimersByTime(5000));
    // // await waitForElementToBeRemoved(tickImg, { timeout: 1500 });
    // expect(product).not.toBeInTheDocument();
    // expect(added).not.toBeInTheDocument();

    global.fetch.mockClear();
    delete global.fetch;
  });
});
