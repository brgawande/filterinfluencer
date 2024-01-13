import express from "express";
import { errorMiddlewares } from "./middlewares/errorMiddlewares.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

import influencerrouter from "./routes/influencerRoutes.js";
app.use("/filterinfluencer", influencerrouter);

export default app;

app.use(errorMiddlewares);
