# 🗃️ Cache Header Mini Server (옵션, Day 2 심화)
## 실행
# 강력 캐시
MODE=strong node server.mjs
# 검증 캐시(ETag)
MODE=etag node server.mjs
# 민감(저장 금지)
MODE=nostore node server.mjs

## 관찰 포인트 (Network 탭)
- 200(메인) → 재요청시 304(검증 캐시) 또는 (disk cache)
- Response Headers: Cache-Control/ETag, Request Headers: If-None-Match
- Size: (from disk cache)/(from memory cache) 표기 차이