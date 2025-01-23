
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// Importing modules from different folders
import { frontendApi } from "./frontend";
import { backendApi } from "./backend";
import { authenticateOwner, authApi } from "./auth";
import { blockchainApi } from "./blockchain";
import { ipfsApi } from "./ipfs";
import config from "./config";

const app = express();
const { port, env, rootAdmin, rootPassword } = config;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Mount APIs
app.use("/frontend", frontendApi);
app.use("/backend", backendApi);
app.use("/auth", authApi);
app.use("/blockchain", blockchainApi);
app.use("/ipfs", ipfsApi);

// Authenticate a user (example user)
const user = { username:rootAdmin, password:rootPassword };
authenticateOwner(user);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} in ${env} mode`);
});


