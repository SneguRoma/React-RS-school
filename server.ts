import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (request, response, next) => {
    const url = request.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--trulala-->');
      const htmlStart = html[0];
      const htmlEnd = html[1];
      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
      const { pipe } = await render(url, {
        onShellReady() {
          response.write(htmlStart);
          pipe(response);
        },
        onAllReady() {
          response.write(htmlEnd);
          response.end();
        },
      });
    } catch (err) {
      vite.ssrFixStacktrace(err as Error);
      next(err);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

createServer();
