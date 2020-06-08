import { Request, Response, Router } from "express";
import { TITLE } from "../shared/Constants";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.status(200).render("public/index", { title: TITLE });
});

export default router;
