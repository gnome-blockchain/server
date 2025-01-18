// Importing modules from different folders
import { startFrontend } from "./frontend";
import { startBackend } from "./backend";
import { authenticateUser } from "./auth";
import { initializeBlockchain } from "./blockchain";
import { initializeIpfs } from "./ipfs";

// Initialize frontend
startFrontend();

// Initialize ipfs
initializeIpfs();

// Initialize backend
startBackend();

// Authenticate a user (example user)
const user = {
  username: "exampleUser",
  password: "password123"
};
authenticateUser(user);

// Initialize blockchain connection
initializeBlockchain();
