import express from "express";
import path from "path";
import fs from "fs";
import AdmZip from "adm-zip";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve ZIP download endpoint
  app.get("/api/download-zip", (req, res) => {
    try {
      const zip = new AdmZip();
      const workspaceRoot = process.cwd();

      // Recursive helper to add files to ZIP
      const addDirectoryToZip = (localPath: string, zipPath: string) => {
        const items = fs.readdirSync(localPath);

        for (const item of items) {
          const fullPath = path.join(localPath, item);
          const relativeZipPath = path.join(zipPath, item);

          // Skip unwanted folders/files
          if (
            item === "node_modules" ||
            item === "dist" ||
            item === ".git" ||
            item === ".next" ||
            item === "out" ||
            item === "build" ||
            item === ".cache" ||
            item === ".env"
          ) {
            continue;
          }

          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            addDirectoryToZip(fullPath, relativeZipPath);
          } else {
            const fileContent = fs.readFileSync(fullPath);
            zip.addFile(relativeZipPath, fileContent);
          }
        }
      };

      // Add all source directories and root configuration files
      addDirectoryToZip(workspaceRoot, "");

      const zipBuffer = zip.toBuffer();

      res.setHeader("Content-Disposition", "attachment; filename=zohan-movers-react-project.zip");
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Length", zipBuffer.length);
      res.send(zipBuffer);
    } catch (error) {
      console.error("Error creating ZIP download:", error);
      res.status(500).json({ error: "Failed to generate project ZIP archive." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
