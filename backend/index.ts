import { Router } from "express";
import {Admin} from "../DataTypes/interface"

let rootAdmin: Admin | null = null;

/**
 * Initialize the root admin from the environment variables.
 */
export function initializeRootAdmin(username: string, password: string) {
  if (!username || !password) {
    throw new Error("Root admin credentials are missing in environment variables");
  }
  rootAdmin = { username, password };
  console.log(`Root admin '${username}' initialized`);
}

export const backendApi = Router();

backendApi.get("/", (req, res) => {
  res.send("Backend initialized");
});