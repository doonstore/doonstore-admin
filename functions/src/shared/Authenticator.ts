import { auth } from "firebase/app";
import { NextFunction, Request, Response } from "express";
import { TITLE } from "./Constants";

export const authenticator = async (
    req: Request | any,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies.__session;
    const credential = auth.GoogleAuthProvider.credential(token);
    auth()
        .signInWithCredential(credential)
        .then((value: auth.UserCredential) => {
            if (value.user && value.user.email === "shaketest89@gmail.com") {
                req.user = value.user;
                next();
            } else {
                res.render("admin/auth-error", {
                    title: TITLE,
                    user: value.user,
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.render("admin/auth-error", {
                title: TITLE,
                user: { displayName: "unknown" },
            });
        });
};
