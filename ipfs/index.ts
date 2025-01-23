import { Router } from "express";

export const ipfsApi = Router();

ipfsApi.get("/status", (req, res) => {
  res.send({ status: "IPFS initialized" });
});