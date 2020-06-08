import { Request, Response, Router } from "express";
import { TITLE } from "../shared/Constants";

const router = Router();

router.get("/", async (req: Request | any, res: Response) => {
    if (req.user) {
        res.status(200).render("admin/index", {
            title: TITLE,
            user: req.user,
        });
    } else {
        res.render("admin/auth-error", {
            title: TITLE,
            user: req.user,
        });
    }
});

export default router;
