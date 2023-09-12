import { rest } from "msw";

const data = require("../db.json").response;

export const handlers = [
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
