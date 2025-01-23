import { Router } from "express";

export const backendApi = Router();

backendApi.get("/", (req, res) => {
  res.send("Backend initialized");
});