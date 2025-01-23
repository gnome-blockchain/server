import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

interface Config {
  port: number;
  env: string;
  rootAdmin: string;
  rootPassword: string;
  blockchainOwnerPublicKey: string;
  pinataApiKey: string;
  pinataApiSecret: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  env: process.env.NODE_ENV || "development",
  rootAdmin: process.env.ROOT_ADMIN || "defaultAdmin",
  rootPassword: process.env.ROOT_PASSWORD || "defaultPassword",
  blockchainOwnerPublicKey: process.env.BLOCKCHAIN_OWNER_PUBLIC_KEY || "",
  pinataApiKey: process.env.PINATA_API_KEY || "",
  pinataApiSecret: process.env.PINATA_API_SECRET || "",
};

export default config;
