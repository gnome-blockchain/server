
import express from "express";
import bodyParser from "body-parser";
// Importing modules from different folders
import { frontendApi } from "./frontend";
import { initializeRootAdmin, backendApi } from "./backend";
import { authApi } from "./auth";
import { initializeBlockchainOwner, blockchainApi } from "./blockchain";
import { ipfsApi } from "./ipfs";
import config from "./config";

const app = express();
const { port, env, rootAdmin, rootPassword, blockchainOwnerPublicKey } = config;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Mount APIs
app.use("/frontend", frontendApi);
app.use("/backend", backendApi);
app.use("/auth", authApi);
app.use("/blockchain", blockchainApi);
app.use("/ipfs", ipfsApi);

// Initialize Admin
initializeRootAdmin(rootAdmin, rootPassword);
initializeBlockchainOwner(blockchainOwnerPublicKey);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} in ${env} mode`);
});


