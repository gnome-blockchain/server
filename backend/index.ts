import { Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export const backendApi = Router();

// Dynamically load routes from the `(routes)` folder
const routesDir = join(__dirname, "(routes)");

function loadRoutes(dir: string, router: Router) {
  const files = readdirSync(dir, { withFileTypes: true });

  files.forEach((file) => {
    const filePath = join(dir, file.name);
    if (file.isDirectory()) {
      // Create a sub-router for the folder
      const subRouter = Router();
      loadRoutes(filePath, subRouter);
      router.use(`/${file.name}`, subRouter);
    } else if (file.name.endsWith(".ts") || file.name.endsWith(".js")) {
      // Import the route and use it
      const route = require(filePath);
      if (typeof route === "function") {
        router.use(route);
      } else if (route.default) {
        router.use(route.default);
      }
    }
  });
}

// Initialize the root admin (optional logic)
export let rootAdmin: { username: string; password: string } | null = null;

export function initializeRootAdmin(username: string, password: string) {
  if (!username || !password) {
    throw new Error("Root admin credentials are missing in environment variables");
  }
  rootAdmin = { username, password };
  console.log(`Root admin '${username}' initialized`);
}

// Load routes from the `(routes)` folder
loadRoutes(routesDir, backendApi);

// Add a root route for the backend API
backendApi.get("/", (req, res) => {
  res.send("Backend initialized");
});
