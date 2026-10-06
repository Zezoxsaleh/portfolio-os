import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function resolveRequestPath(url) {
  const parsed = new URL(url, `http://127.0.0.1:${port}`);
  const requested = normalize(decodeURIComponent(parsed.pathname)).replace(/^(\.\.[/\\])+/, "");
  const target = resolve(join(root, requested === "/" ? "index.html" : requested));
  if (!target.startsWith(root)) return null;
  if (!existsSync(target)) return null;
  if (statSync(target).isDirectory()) return join(target, "index.html");
  return target;
}

createServer((request, response) => {
  const target = resolveRequestPath(request.url || "/");
  if (!target || !existsSync(target)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes[extname(target)] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Portfolio OS running at http://127.0.0.1:${port}/`);
});
