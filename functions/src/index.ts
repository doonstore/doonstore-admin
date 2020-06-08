import { https } from "firebase-functions";
import app from "./Server";

export const index = https.onRequest(app);
