import { rest } from "msw";

const data = require("../db.json").response;

export const handlers = [
  rest.get("/", (req, res, ctx) => {
    if (data) {
      return res(ctx.status(200), ctx.json(data));
    }
    return res(ctx.status(400), ctx.json({ error: "No data available" }));
  }),
];
