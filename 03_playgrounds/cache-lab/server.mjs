import http from 'node:http';

const port = 8080;
// 모드: strong(강력 캐시) | etag(검증 캐시) | nostore(민감/캐시금지)
const mode = process.env.MODE || 'strong';

const etag = '"v1-abc123"';
const body = JSON.stringify({ ts: Date.now(), mode });

const server = http.createServer((req, res) => {
  if (req.url === '/api/data') {
    if (mode === 'nostore') {
      res.setHeader('Cache-Control', 'no-store');
    } else if (mode === 'etag') {
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('ETag', etag);
      const inm = req.headers['if-none-match'];
      if (inm === etag) {
        res.writeHead(304);
        return res.end();
      }
    } else {
      res.setHeader('Cache-Control', 'max-age=20, must-revalidate');
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(body);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('cache-lab: /api/data 로 요청해 보세요.');
  }
});

server.listen(port, () => {
  console.log(`Cache lab on http://localhost:${port} (MODE=${mode})`);
});
