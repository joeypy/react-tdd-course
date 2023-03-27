// import { render, screen } from "@testing-library/react";

// import App from "./App";

// describe("App test", () => {
//   it("renders headline", () => {

//     // check if App components renders headline
//   });
// });

import { fireEvent, render, screen } from "../utils/test-utils";

import { HelloWorld } from "../components/HelloWorld";

describe("Main test", () => {
  test("Example test", () => {
    render(<HelloWorld />);

    const title = screen.getByText(/Hello World/i);

    expect(title).toBeInTheDocument();
    // screen.debug(title);
  });
});
