import { render, screen, waitFor } from "@testing-library/react";
import App from "../../../App";
import { server } from "../../../mocks/server";
import { rest } from "msw";

test("checking server response for scoop images", async () => {
  render(<App />);

  await waitFor(async () => {
    const image = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(image).toHaveLength(2);
  });
});

test("check for server response for topping images", async () => {
  render(<App />);
  await waitFor(async () => {
    const image = await screen.findAllByRole("img", { name: /topping$/i });
    expect(image).toHaveLength(2);
  });
});

test("handling server errors", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  server.resetHandlers(
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<App />);
  // this has to be used if only one is ther else waitFor and tohvalenth(2)---> all method return aarray
  //   const alert = await screen.findByText(/server error/i);
  //   expect(alert).toBeInTheDocument();

  await waitFor(async () => {
    const alert = await screen.findAllByText(/server error/i);
    expect(alert).toHaveLength(2);
  });
});
