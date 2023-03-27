import App from "../App";
import { fireEvent, render, screen } from "../utils/test-utils";

describe("Render count data correctly", () => {
  test("Should display zero initial counts", () => {
    render(<App />);

    const button = screen.getByTestId('btn-counter');
    fireEvent.click(button);

    const result = screen.getByText(/count is 1/i);

    expect(result).toBeInTheDocument();
    screen.debug(result);
  });

  test("Should display new counter after one click", () => {});
});
