import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";
import { findLengthOfString } from "./App";
import userEvent from "@testing-library/user-event";

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // const linkElement = screen.getByRole('link',{name:/Learn React/i})
//   // expect(linkElement).toBeInTheDocument();
// });

test("check button intialy has red color and turns blue on click", () => {
  const { container } = render(<App />);
  logRoles(container);

  const buttonElement = screen.getByRole("button", {
    name: "Change to yellow",
  });
  expect(buttonElement).toHaveStyle({ "background-color": "green" });

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ "background-color": "yellow" });
  expect(buttonElement).toHaveTextContent("Change to green");
});

// test('check button turns red onclick',()=>{
//   // render(<App/>);
//   // buttonElement = screen.findByRole('')

// });

test("Button enabled by default and disabled on click and ondouble click reenabled", async () => {
  render(<App />);
  // instead of fireEvent userEvent should be used and it always reuturns promise
  const user = userEvent.setup();
  const checkbox = screen.getByRole("checkbox", { label: "Check" });
  const button = screen.getByRole("button", { name: "Change to yellow" });

  expect(button).toBeEnabled();

  // fireEvent.click(checkbox);
  await user.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ "background-color": "gray" });

  //fireEvent.click(checkbox);
  await user.click(checkbox);
  expect(checkbox).toBeEnabled();
  expect(button).toHaveStyle({ "background-color": "green" });
});

//unit testing a funtion
describe("unittesting funtion", () => {
  test.skip("find length of small string", () => {
    render(<App />);
    expect(findLengthOfString("Never")).toBe(5);
  });
  test("find length of large string", () => {
    render(<App />);
    expect(findLengthOfString("Nevergiveup")).toBe(11);
  });
});
