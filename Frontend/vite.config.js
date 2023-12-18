import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PORT: JSON.stringify(process.env.PORT),
      MONGO_URI: JSON.stringify(process.env.MONGO_URI),
      JWT_SECRET: JSON.stringify(process.env.JWT_SECRET),
      JWT_EXPIRY: JSON.stringify(process.env.JWT_EXPIRY),
      // Add other environment variables as needed
    },
  },
});
