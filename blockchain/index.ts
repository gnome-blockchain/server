import { Router } from "express";

let blockchainOwner: string | null = null;

/**
 * Initialize the blockchain owner using the public key.
 */
export function initializeBlockchainOwner(publicKey: string) {
  if (!publicKey) {
    throw new Error("Blockchain owner public key is not defined in the environment variables");
  }
  blockchainOwner = publicKey;
  console.log(`Blockchain owner initialized: ${blockchainOwner}`);
}

export const blockchainApi = Router();

blockchainApi.get("/info", (req, res) => {
  res.send({ status: "Blockchain initialized", network: "Holesky" });
});