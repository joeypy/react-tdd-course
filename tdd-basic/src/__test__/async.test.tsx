import { fireEvent, render, screen } from "../utils/test-utils";
import { AsyncList } from "../components/AsyncList";

describe("Render list of food from api", () => {
  test("should render list", async () => {
    render(<AsyncList />);

    const hamburger = await screen.findByText(/hamburger/i);

    expect(hamburger).toBeInTheDocument();
    expect(await screen.findByText(/pizza/i)).toBeInTheDocument();
    expect(await screen.findByText(/apple/i)).toBeInTheDocument();
  });
});
