import { Router } from "express";

export const blockchainApi = Router();

blockchainApi.get("/info", (req, res) => {
  res.send({ status: "Blockchain initialized", network: "Holesky" });
});