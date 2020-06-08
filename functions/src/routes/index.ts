import { Router } from "express";
import PublicRouter from "./Public";
import AdminRouter from "./Admin";
import { authenticator } from "../shared/Authenticator";

const router = Router();

router.use("/", PublicRouter);
router.use("/admin", authenticator, AdminRouter);

export default router;
