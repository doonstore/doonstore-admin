import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import { initializeApp } from "firebase";
import express, { NextFunction, Request, Response } from "express";
// tslint:disable-next-line: no-import-side-effect
import "firebase/auth";
// tslint:disable-next-line: no-import-side-effect
import "firebase/firestore";
// tslint:disable-next-line: no-import-side-effect
import "express-async-errors";

import ApplicationRouter from "./routes";
import logger from "./shared/Logger";

const app = express();

import firebaseConfig from './shared/google-services.json';
initializeApp(firebaseConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
    app.use(helmet());
}

app.use("/", ApplicationRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err);
    res.render("public/error", {
        error: err.message,
    });
});

export default app;
