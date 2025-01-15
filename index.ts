// Importing modules from different folders
import { startFrontend } from "./frontend";
import { startBackend } from "./backend";
import { authenticateUser } from "./auth";
import { initializeBlockchain } from "./blockchain";

// Initialize frontend
startFrontend();

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
